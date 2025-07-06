import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood, insertSampleFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

// Multer storage config for images
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  }
});

const upload = multer({ storage });

// Routes
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/insert-sample", insertSampleFood);

export default foodRouter;
