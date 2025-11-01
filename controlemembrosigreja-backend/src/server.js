const express = require("express");
const routes = require("./routes/roteador");
const cors = require("cors");

const server = express();

const corsOptions = {
  origin: process.env.ORIGIN_DOMAIN,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Accept",
    "X-Requested-With",
  ],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Middleware de CORS
server.use(cors(corsOptions));

server.use(express.json());
server.use("/api", routes);

// health
server.get("/api", (req, res) => res.send("Hello World!"));

// error handler
server.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Listening on port 3000");
});
