const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9999;

app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.json());

const getProducts = (folder, file) => {
  try {
    const filePath = path.join(
      __dirname,
      'services',
      'collection',
      folder,
      file,
    );
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', file, error);
    return null;
  }
};

// Get Home Products
app.get('/api/home/:file', (req, res) => {
  const { file } = req.params;
  const fileName = `${file}.json`;

  const data = getProducts('home', fileName);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'File not found!' });
  }
});

// Get Menu endpoints
app.get('/api/home/menu/:menuFiels', (req, res) => {
  const { menuFiels } = req.params;
  const fileName = `${menuFiels}.json`;

  const data = getProducts('home/menu', fileName);

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: 'File not found!' });
  }
});

// Get Whole Products
app.get('/api/mainProducts/:category', (req, res) => {
  const { category } = req.params;
  const fileName = `${category}.json`;
  const products = getProducts('mainProducts', fileName);

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: 'Category not found!' });
  }
});

// Get single product by id
app.get('/api/mainProducts/:category/:id', (req, res) => {
  const { category, id } = req.params;
  const fileName = `${category}.json`;

  const data = getProducts('mainProducts', fileName);

  if (!data) return res.status(404).json({ message: 'Category file not found!' });

  // Assuming your JSON structure is { snowboards: [ ... ] }
  const productArray = data[category]; // e.g., data["snowboards"]

  if (!productArray) return res.status(404).json({ message: 'Category not found!' });

  const product = productArray.find((p) => p.id === id);

  if (!product) return res.status(404).json({ message: 'Product not found!' });

  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`✅ Fake API running at http://localhost:${PORT}`);
});

//  Folder/File Checker
// const homeFilePath = path.join(__dirname, 'services', "collection", "mainProducts");
// console.log("Checking path:", homeFilePath);
// console.log("File exists?", fs.existsSync(homeFilePath));
