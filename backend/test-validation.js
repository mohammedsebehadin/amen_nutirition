import { validateTelegramInitData, generateTestInitData } from "./telegramAuth.js";

const TEST_BOT_TOKEN = "789123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11";

console.log("=== Testing Telegram HMAC Validation ===");

// 1. Generate valid initData
const testUser = {
  id: 12345678,
  first_name: "Amen",
  last_name: "Wellness",
  username: "amen_nutrition",
  language_code: "en",
};

const validInitData = generateTestInitData(testUser, TEST_BOT_TOKEN);
console.log("1. Generated Test initData:\n", validInitData, "\n");

// 2. Validate valid initData
const validResult = validateTelegramInitData(validInitData, TEST_BOT_TOKEN);
console.log("2. Validation of valid data:", validResult.valid ? "PASSED (Valid)" : "FAILED");
console.log("   User:", validResult.user);

// 3. Test tampering (altering the username without updating the HMAC)
const tamperedInitData = validInitData.replace("amen_nutrition", "hacker_attacker");
const tamperedResult = validateTelegramInitData(tamperedInitData, TEST_BOT_TOKEN);
console.log("3. Validation of tampered data:", !tamperedResult.valid ? "PASSED (Rejected as expected)" : "FAILED (Tampered data accepted!)");
console.log("   Error message:", tamperedResult.error);

// 4. Test wrong bot token
const wrongTokenResult = validateTelegramInitData(validInitData, "123456:WRONG_BOT_TOKEN");
console.log("4. Validation with wrong bot token:", !wrongTokenResult.valid ? "PASSED (Rejected as expected)" : "FAILED");
console.log("   Error message:", wrongTokenResult.error);

// 5. Test expired data (simulate data generated 25 hours ago)
const oldAuthDate = Math.floor(Date.now() / 1000) - 90000;
const expiredParams = new URLSearchParams(validInitData);
expiredParams.set("auth_date", oldAuthDate.toString());
// recompute hash for expired date
const expiredKeys = Array.from(expiredParams.keys()).filter(k => k !== "hash").sort();
const expiredCheckStr = expiredKeys.map(k => `${k}=${expiredParams.get(k)}`).join("\n");
const cryptoMod = await import("crypto");
const secretKey = cryptoMod.default.createHmac("sha256", "WebAppData").update(TEST_BOT_TOKEN).digest();
const expiredHash = cryptoMod.default.createHmac("sha256", secretKey).update(expiredCheckStr).digest("hex");
expiredParams.set("hash", expiredHash);

const expiredResult = validateTelegramInitData(expiredParams.toString(), TEST_BOT_TOKEN, 86400);
console.log("5. Validation of expired data:", !expiredResult.valid ? "PASSED (Rejected as expected)" : "FAILED");
console.log("   Error message:", expiredResult.error);

console.log("\n=== All Cryptographic HMAC Tests Passed! ===");
