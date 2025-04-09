const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { clerkMiddleware } = require("@clerk/express");
const profileRoutes = require("./routes/profileRoutes.js");
const serverRoutes = require("./routes/serverRoutes.js");

dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:5173", // your frontend (React/Vite)
  credentials: true, // allow Clerk cookies to pass
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(clerkMiddleware());

app.use("/profile", profileRoutes);
app.use("/servers", serverRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
