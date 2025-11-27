const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const fetch = require("node-fetch"); // Works in CommonJS

dotenv.config();

const app = express();


const allowedOrigins = [
  process.env.ALLOWED_ORIGIN_LOCAL || "http://localhost:5173",
  process.env.ALLOWED_ORIGIN_LOCAL_2 || "http://localhost:5174",
  process.env.ALLOWED_ORIGIN_PROD || "https://nayanpathak.vercel.app",
];

console.log("Loaded CORS Allowed Origins:", allowedOrigins);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-to-server requests (Postman, Render health checks)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log("🔥 BLOCKED ORIGIN:", origin);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Too many requests. Try again later." },
});
app.use("/api/send-email", limiter);

// Utility to prevent basic HTML injection
const escapeHtml = (str = "") => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

// Load env variables
const RESEND_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

// Email Route
app.post("/api/send-email", async (req, res) => {
  const { fullName, email, message } = req.body;

  // Validate
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  const html = `
    <h2>New Portfolio Message</h2>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Message from ${fullName}`,
        html,
      }),
    });

    if (!response.ok) {
      const txt = await response.text();
      console.log("Resend Error:", txt);
      return res.status(502).json({ error: "Resend failed." });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
