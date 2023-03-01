const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");


// Create Product ----- Admin
const createProduct = asyncHandler(async (req,res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error)
    }
})

// Get All Products
const getAllProducts = asyncHandler(async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        throw new Error(error)
    }
})


// Get Single Product ----- Admin
const getSingleProduct = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createProduct, getSingleProduct, getAllProducts }