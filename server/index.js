const express = require("express");
const dotenv = require("dotenv");
const { clerkMiddleware } = require("@clerk/express");
const profileRoutes = require("./routes/profileRoutes.js");

dotenv.config();

const app = express();
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/profile", profileRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
