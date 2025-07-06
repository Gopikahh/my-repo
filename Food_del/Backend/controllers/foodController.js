import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }
 console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);

    const image_filename = req.file.filename;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  
    await food.save();
    res.json({ success: true, message: "Food added" });
    
  } catch (error) {
    console.error("Error saving food:", error);
    res.status(500).json({ success: false, message: "Failed to add food", error: error.message });
  }
};

// List all foods
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.error("Error listing food:", error);
    res.status(500).json({ success: false, message: "Failed to list foods" });
  }
};

// Remove a food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    // Delete image file from uploads folder
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.error("Failed to delete image file:", err);
    });

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.status(500).json({ success: false, message: "Failed to remove food" });
  }
};

// Insert a sample food item
const insertSampleFood = async (req, res) => {
  try {
    const sampleFood = new foodModel({
      name: "Burger",
      description: "Delicious veggie burger",
      price: 150,
      category: "Fast Food",
      image: "sample.jpg" // Make sure this image exists in /uploads
    });

    await sampleFood.save();
    res.json({ success: true, message: "Sample food inserted" });
  } catch (error) {
    console.error("Error inserting sample food:", error);
    res.status(500).json({ success: false, message: "Failed to insert sample food" });
  }
};

export { addFood, listFood, removeFood, insertSampleFood };
