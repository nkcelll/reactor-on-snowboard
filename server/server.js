const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");


const app = express();
const PORT = 9999;

app.use(cors({
  origin: "*" // Allow requests from all origins
}));

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// 📌 Function to load JSON data from a file
const getProducts = (file) => {
  try {
    const filePath = path.join(__dirname, "collection",'menu', file); // Construct file path
    // console.log("Looking for file at:", filePath); // Log the file path for debugging
    const data = fs.readFileSync(filePath, "utf-8"); // Read file data
    return JSON.parse(data); // Parse and return the JSON data
  } catch (error) {
    console.error("Error reading file:", file, error);
    return null; // Return null if there is an error
  }
};

// 📌 Route to get products by category
app.get("/api/products/:category", (req, res) => {
  const { category } = req.params; // Extract the category from the URL
  const fileName = `${category}.json`; // Construct the file name dynamically
  const products = getProducts(fileName); // Call getProducts with the file name

  if (products) {
    // If products are found, send them in the response
    res.status(200).json(products);
  } else {
    // If no products are found (file is missing or empty), send an error message
    res.status(404).json({ message: "Category not found!" });
  }
});

// 📌 Start the server
app.listen(PORT, () => {
  console.log(`✅ Fake API running at http://localhost:${PORT}`);
});
