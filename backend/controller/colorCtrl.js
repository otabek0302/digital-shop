const Color = require('../models/colorModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')


// Create Color for Product
const createColor = asyncHandler(async (req,res) => {
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel All Categories 
const getAllColors = asyncHandler(async (req,res) => {
    try {
        const getAllColors = await Color.find();
        res.json(getAllColors)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel Single Color 
const getSingleColor = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const getColor = await Color.findById(id);
        res.json(getColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Update Color 
const updateColor = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const updateColor = await Color.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateColor)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete Color 
const deleteColor = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deleteColor = await Color.findByIdAndDelete(id);
        res.json(deleteColor)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createColor, updateColor, deleteColor, getAllColors, getSingleColor }
