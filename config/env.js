const rawCorsOrigins = String(process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

module.exports = {
  port: Number(process.env.PORT) || 4000,
  mongoUri: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mytestdb",
  jwtSecret: process.env.JWT_SECRET || "dev-secret-change-me",
  corsOrigins: rawCorsOrigins,
  publicApiBaseUrl: String(process.env.PUBLIC_API_BASE_URL || "").trim().replace(/\/+$/, ""),
};
