const { requireAuth } = require("@clerk/express");

module.exports = requireAuth(); // This will add `req.auth.userId`
