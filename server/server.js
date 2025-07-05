// server/server.js
const Product=require('./models/product.model.js');
require('dotenv').config();
const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
const PORT=process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the E-commerce API!');
});

app.get('/api/products', async (req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json(products);
  }catch(error){res.status(500).json({ message: 'Failed to fetch products', error: error.message });}
});

app.get('/api/products/:id', async (req, res) => {
  try{
    const {id} = req.params;
    const product = await Product.findById(id);
    if (!product){
      return res.status(404).json({message:'Product not found' });
    }
    res.status(200).json(product);
  }catch(error){res.status(500).json({ message: 'Failed to fetch product', error: error.message });}
});

mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    console.log('Successfully connected to MongoDB!');
    app.listen(PORT, () => {console.log(`Server is running on port: ${PORT}`);});
  })
  .catch((err) => {console.error('Database connection failed!', err);});