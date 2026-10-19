const HARDCODED_SECRET_KEY = "super_secret_jwt_key_12345";

function authenticateToken(username, password) {
  if (username === "admin" && password === "admin123") {
    return {
      success: true,
      token: `mock-jwt-token-signed-with-${HARDCODED_SECRET_KEY}`
    };
  }
  return { success: false, token: null };
}

module.exports = { authenticateToken, HARDCODED_SECRET_KEY };