const prisma = require("../lib/prisma.js");
const { clerkClient } = require("@clerk/express");

// GET /api/profile
const getCurrentProfile = async (req, res) => {
  const { userId } = req.auth;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const profile = await prisma.profile.findUnique({ where: { userId } });

  if (!profile) {
    return res.status(404).json({ error: "Profile not found" });
  }

  res.json(profile);
};

// POST /api/profile
const getOrCreateUserProfile = async (req, res) => {
  const { userId } = req.auth;

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await clerkClient.users.getUser(userId);

  const profile = await prisma.profile.upsert({
    where: { userId },
    update: {}, // If exists, return as-is (no changes)
    create: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
    },
  });

  res.status(200).json(profile);
};

module.exports = { getCurrentProfile, getOrCreateUserProfile };