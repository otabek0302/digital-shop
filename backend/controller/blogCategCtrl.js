const Category = require('../models/blogCategModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')


// Create Category for Product
const createCategory = asyncHandler(async (req,res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel All Categories 
const getAllCategories = asyncHandler(async (req,res) => {
    try {
        const getAllCategories = await Category.find();
        res.json(getAllCategories)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel Single Category 
const getSingleCategory = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const getCategory = await Category.findById(id);
        res.json(getCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Update Category 
const updateCategory = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateCategory)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete Category 
const deleteCategory = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json(deleteCategory)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createCategory, updateCategory, deleteCategory, getAllCategories, getSingleCategory }
