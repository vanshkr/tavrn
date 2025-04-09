// lib/prisma.js
const { PrismaClient } = require("@prisma/client");

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient(); // new instance for production
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(); // cache once in dev
  }
  prisma = global.prisma;
}

module.exports = prisma;
