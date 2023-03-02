const Brand = require('../models/brandModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')


// Create Brand for Product
const createBrand = asyncHandler(async (req,res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel All Categories 
const getAllBrands = asyncHandler(async (req,res) => {
    try {
        const getAllBrands = await Brand.find();
        res.json(getAllBrands)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel Single Brand 
const getSingleBrand = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const getBrand = await Brand.findById(id);
        res.json(getBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Update Brand 
const updateBrand = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const updateBrand = await Brand.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateBrand)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete Brand 
const deleteBrand = asyncHandler(async (req,res) => {
    const { id } = req.params;
    try {
        const deleteBrand = await Brand.findByIdAndDelete(id);
        res.json(deleteBrand)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createBrand, updateBrand, deleteBrand, getAllBrands, getSingleBrand }
