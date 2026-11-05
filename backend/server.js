import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { validateTelegramInitData, generateTestInitData } from "./telegramAuth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple .env parser to avoid requiring external packages if offline
function loadEnv() {
  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}
loadEnv();

const PORT = parseInt(process.env.PORT, 10) || 5000;
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "789123456:TEST_BOT_TOKEN_FOR_AMEN_WELLNESS";
const MAX_AGE_SECONDS = parseInt(process.env.TELEGRAM_AUTH_MAX_AGE_SECONDS, 10) || 86400;

// Helper to extract initData from various request formats
function extractInitData(req, body = {}) {
  // 1. Authorization header: "tma <initData>" or Bearer
  const authHeader = req.headers["authorization"] || req.headers["Authorization"];
  if (authHeader) {
    if (authHeader.startsWith("tma ") || authHeader.startsWith("TMA ")) {
      return authHeader.slice(4).trim();
    }
    if (authHeader.startsWith("Bearer ") || authHeader.startsWith("bearer ")) {
      return authHeader.slice(7).trim();
    }
  }

  // 2. Custom header: X-Telegram-Init-Data
  if (req.headers["x-telegram-init-data"]) {
    return req.headers["x-telegram-init-data"].trim();
  }

  // 3. Body: { initData: "..." }
  if (body && body.initData) {
    return body.initData.trim();
  }

  return "";
}

// Check if Express is available dynamically
let expressApp = null;
try {
  const expressModule = await import("express");
  const corsModule = await import("cors");
  const express = expressModule.default;
  const cors = corsModule.default;

  const app = express();
  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Middleware for Telegram HMAC validation
  const telegramAuthMiddleware = (req, res, next) => {
    const initData = extractInitData(req, req.body);
    const result = validateTelegramInitData(initData, BOT_TOKEN, MAX_AGE_SECONDS);
    if (!result.valid) {
      return res.status(401).json({
        success: false,
        valid: false,
        error: result.error,
      });
    }
    req.telegramUser = result.user;
    req.telegramAuth = result;
    next();
  };

  // Health and info endpoint
  app.get(["/", "/api/health"], (req, res) => {
    res.json({
      status: "ok",
      service: "Amen Weight & Wellness Telegram Auth Service",
      timestamp: new Date().toISOString(),
      botTokenConfigured: Boolean(BOT_TOKEN && BOT_TOKEN.length > 10),
      authMaxAgeSeconds: MAX_AGE_SECONDS,
    });
  });

  // Validate endpoint
  app.post("/api/auth/validate", (req, res) => {
    const initData = extractInitData(req, req.body);
    const result = validateTelegramInitData(initData, BOT_TOKEN, MAX_AGE_SECONDS);

    if (result.valid) {
      return res.json({
        success: true,
        valid: true,
        user: result.user,
        authDate: result.authDate,
        queryId: result.queryId,
        message: "Telegram session cryptographically authenticated via HMAC-SHA256",
      });
    } else {
      return res.status(400).json({
        success: false,
        valid: false,
        error: result.error,
      });
    }
  });

  // Protected user profile endpoint
  app.get("/api/user/profile", telegramAuthMiddleware, (req, res) => {
    res.json({
      success: true,
      user: req.telegramUser,
      wellnessProfile: {
        membershipTier: "Amen Wellness VIP Client",
        nutritionCoach: "Coach Amen",
        activeProtocol: "Metabolic Optimization & Lean Body Architecture",
        hydrationGoalMl: 2500,
        currentPhase: "Phase 2: Glycemic Load Balancing",
        weeklyCheckinDay: "Monday",
      },
    });
  });

  // Test helper: Generate signed initData for local demo
  app.post("/api/test/generate-init-data", (req, res) => {
    const userPayload = req.body.user || {
      id: 987654321,
      first_name: "Amen",
      last_name: "Client",
      username: "amen_client",
      language_code: "en",
    };
    const signedInitData = generateTestInitData(userPayload, BOT_TOKEN);
    res.json({
      success: true,
      initData: signedInitData,
      user: userPayload,
      note: "Generated with current TELEGRAM_BOT_TOKEN for local testing",
    });
  });

  // Coach and Wellness Stats endpoint
  app.get("/api/wellness/stats", (req, res) => {
    res.json({
      headCoach: "Amen",
      brand: "Amen Weight & Wellness",
      activeTransformations: 520,
      avgWeightLossKg: 8.4,
      retentionRate: "96.5%",
      primaryPillars: [
        "Metabolic Architecture",
        "Bio-Individual Nutrition",
        "Body Recomposition",
        "Circadian Fasting & Hydration",
      ],
    });
  });

  app.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`  Amen Weight & Wellness Express Server`);
    console.log(`  Listening on http://localhost:${PORT}`);
    console.log(`  HMAC Telegram Validation: ENABLED`);
    console.log(`=================================================\n`);
  });

  expressApp = app;
} catch (err) {
  // If express is not installed, run native HTTP server with full compatibility
  console.log("Express not installed yet, starting native HTTP fallback server...");

  const server = http.createServer(async (req, res) => {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Telegram-Init-Data");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
    const pathname = parsedUrl.pathname;

    let rawBody = "";
    req.on("data", (chunk) => {
      rawBody += chunk;
    });

    req.on("end", () => {
      let body = {};
      if (rawBody) {
        try {
          body = JSON.parse(rawBody);
        } catch {
          try {
            body = Object.fromEntries(new URLSearchParams(rawBody).entries());
          } catch {}
        }
      }

      res.setHeader("Content-Type", "application/json");

      if (pathname === "/" || pathname === "/api/health") {
        res.writeHead(200);
        return res.end(
          JSON.stringify({
            status: "ok",
            service: "Amen Weight & Wellness Telegram Auth Service (Native HTTP Engine)",
            timestamp: new Date().toISOString(),
            botTokenConfigured: Boolean(BOT_TOKEN && BOT_TOKEN.length > 10),
            authMaxAgeSeconds: MAX_AGE_SECONDS,
          })
        );
      }

      if (pathname === "/api/auth/validate" && req.method === "POST") {
        const initData = extractInitData(req, body);
        const result = validateTelegramInitData(initData, BOT_TOKEN, MAX_AGE_SECONDS);

        if (result.valid) {
          res.writeHead(200);
          return res.end(
            JSON.stringify({
              success: true,
              valid: true,
              user: result.user,
              authDate: result.authDate,
              queryId: result.queryId,
              message: "Telegram session cryptographically authenticated via HMAC-SHA256",
            })
          );
        } else {
          res.writeHead(400);
          return res.end(
            JSON.stringify({
              success: false,
              valid: false,
              error: result.error,
            })
          );
        }
      }

      if (pathname === "/api/test/generate-init-data" && req.method === "POST") {
        const userPayload = body.user || {
          id: 987654321,
          first_name: "Amen",
          last_name: "Client",
          username: "amen_client",
          language_code: "en",
        };
        const signedInitData = generateTestInitData(userPayload, BOT_TOKEN);
        res.writeHead(200);
        return res.end(
          JSON.stringify({
            success: true,
            initData: signedInitData,
            user: userPayload,
            note: "Generated with current TELEGRAM_BOT_TOKEN for local testing",
          })
        );
      }

      if (pathname === "/api/wellness/stats" && req.method === "GET") {
        res.writeHead(200);
        return res.end(
          JSON.stringify({
            headCoach: "Amen",
            brand: "Amen Weight & Wellness",
            activeTransformations: 520,
            avgWeightLossKg: 8.4,
            retentionRate: "96.5%",
          })
        );
      }

      res.writeHead(404);
      res.end(JSON.stringify({ error: "Endpoint not found" }));
    });
  });

  server.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`  Amen Weight & Wellness Server (Native Engine)`);
    console.log(`  Listening on http://localhost:${PORT}`);
    console.log(`  HMAC Telegram Validation: ENABLED`);
    console.log(`=================================================\n`);
  });
}

