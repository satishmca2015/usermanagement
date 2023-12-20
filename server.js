const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

// CORS options
const corsOptions = {
  origin: "https://localhost:"+PORT,
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));

// Body parser middleware to handle JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const userRouter = require("./routes/userRoutes");
app.use("/api", userRouter);

// Root route (optional: can be customized or removed)
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the API" });
});

// Error handling middleware for 404 - Not Found
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
