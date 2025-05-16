import express from "express";
import cors from "cors";
import 'dotenv/config.js';
import authRoutes from "./routes/user.routes.js";
import watchListRoutes from "./routes/watchlist.routes.js";
import connectDB from "./config/db.config.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/watchlist", watchListRoutes);

// MongoDB connection
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on PORT - ${PORT}`);
});