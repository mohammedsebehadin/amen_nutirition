import crypto from "crypto";

/**
 * Validates Telegram Mini App initData according to official specifications.
 * 
 * @param {string} initData - The raw initData query string from window.Telegram.WebApp.initData
 * @param {string} botToken - Your Telegram Bot Token from @BotFather
 * @param {number} [maxAgeSeconds=86400] - Maximum allowed age of the authentication data in seconds (default 24h)
 * @returns {{ valid: boolean, user?: object, authDate?: Date, error?: string }}
 */
export function validateTelegramInitData(initData, botToken, maxAgeSeconds = 86400) {
  if (!initData || typeof initData !== "string") {
    return { valid: false, error: "Missing or invalid initData string" };
  }

  if (!botToken) {
    return { valid: false, error: "Missing botToken for verification" };
  }

  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");

    if (!hash) {
      return { valid: false, error: "Missing hash parameter in initData" };
    }

    // 1. Remove hash and signature, sort remaining keys alphabetically
    const keys = Array.from(params.keys())
      .filter((key) => key !== "hash" && key !== "signature")
      .sort();

    // 2. Build data-check-string with format "key=value\nkey2=value2..."
    const dataCheckString = keys
      .map((key) => `${key}=${params.get(key)}`)
      .join("\n");

    // 3. Compute secret key: HMAC-SHA256 of botToken with secret "WebAppData"
    const secretKey = crypto
      .createHmac("sha256", "WebAppData")
      .update(botToken)
      .digest();

    // 4. Compute expected hash
    const calculatedHash = crypto
      .createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    // 5. Timing-safe comparison to prevent timing attacks
    const calculatedBuffer = Buffer.from(calculatedHash, "hex");
    const hashBuffer = Buffer.from(hash, "hex");

    if (calculatedBuffer.length !== hashBuffer.length) {
      return { valid: false, error: "Hash length mismatch" };
    }

    const isValid = crypto.timingSafeEqual(calculatedBuffer, hashBuffer);
    if (!isValid) {
      return { valid: false, error: "HMAC verification failed: hash does not match" };
    }

    // 6. Validate expiration window
    const authDateSeconds = parseInt(params.get("auth_date"), 10);
    if (isNaN(authDateSeconds)) {
      return { valid: false, error: "Missing or invalid auth_date" };
    }

    const nowSeconds = Math.floor(Date.now() / 1000);
    if (maxAgeSeconds > 0 && nowSeconds - authDateSeconds > maxAgeSeconds) {
      return { valid: false, error: `Authentication expired. Age: ${nowSeconds - authDateSeconds}s, Max: ${maxAgeSeconds}s` };
    }

    // 7. Parse authenticated user data
    let user = null;
    const rawUser = params.get("user");
    if (rawUser) {
      try {
        user = JSON.parse(rawUser);
      } catch {
        // Non-JSON user
        user = { raw: rawUser };
      }
    }

    return {
      valid: true,
      user,
      authDate: new Date(authDateSeconds * 1000),
      queryId: params.get("query_id") || null,
      rawParams: Object.fromEntries(params.entries()),
    };
  } catch (err) {
    return { valid: false, error: `Validation exception: ${err.message}` };
  }
}

/**
 * Utility to generate a valid signed initData string for testing and development.
 * 
 * @param {object} user - User payload
 * @param {string} botToken - Bot token used to sign
 * @returns {string} - URL query string with valid HMAC hash
 */
export function generateTestInitData(user, botToken) {
  const authDate = Math.floor(Date.now() / 1000);
  const params = new URLSearchParams();
  params.set("auth_date", authDate.toString());
  params.set("query_id", "AAG_TEST_INIT_DATA_" + Date.now());
  params.set("user", JSON.stringify(user));

  const keys = Array.from(params.keys()).sort();
  const dataCheckString = keys.map((k) => `${k}=${params.get(k)}`).join("\n");

  const secretKey = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();
  const hash = crypto.createHmac("sha256", secretKey).update(dataCheckString).digest("hex");

  params.set("hash", hash);
  return params.toString();
}

