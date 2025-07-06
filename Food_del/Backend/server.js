// server.js
import dotenv from "dotenv";
dotenv.config();



import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/UserRoute.js";
import 'dotenv/config'

const app = express();
const port = 4000;




// Middleware
app.use(express.json());
//app.use(cors());
app.use(cors({ origin: "*" }));


// Connect to MongoDB
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user",userRouter)

// Root endpoint
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
