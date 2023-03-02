const asyncHandler = require('express-async-handler')
const Product = require('../models/productModel')
//
const slugify = require('slugify')
const { query } = require('express')

// Create Product ----- Admin
const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title)
    }
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (error) {
    throw new Error(error)
  }
})

// Get All Products
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));


    // sorting the data
    if(req.query.sort){
        const sortBy = req.query.sort.split(",").join(" ");
        query = query.sort(sortBy)
    }else{
        query = query.sort('-createdAt')
    }

    // limiting the fields
    if (req.query.fields) {
        const fields = req.query.fields.split(",").join(" ");
        query = query.select(fields);
      } else {
        query = query.select("-__v");
      }

    // pagination
    const page  = req.query.page;
    const limit = req.query.limit;
    const skip = req.query.slip;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
        const productCount = await Product.countDocuments();
        if(skip >= productCount) throw new Error('This page is not excist')
    }

      const product = await query;
      res.json(product);
  } catch (error) {
    throw new Error(error)
  }
})

// Get Single Product ----- Admin
const getSingleProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const findProduct = await Product.findById(id)
    res.json(findProduct)
  } catch (error) {
    throw new Error(error)
  }
})

// Update Product ----- Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title)
    }
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.json(updateProduct)
  } catch (error) {
    throw new Error(error)
  }
})

// Delete Product ----- Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const deleteProduct = await Product.findByIdAndDelete(id)
    res.json(deleteProduct)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
}
