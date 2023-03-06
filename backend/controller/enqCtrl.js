const Enquiry = require('../models/enqModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')


// Create Enquiry for Product
const createEnquiry = asyncHandler(async (req,res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel All Categories 
const getAllEnquirys = asyncHandler(async (req,res) => {
    try {
        const getAllEnquirys = await Enquiry.find();
        res.json(getAllEnquirys)
    } catch (error) {
        throw new Error(error)
    }
})

// Gel Single Enquiry 
const getSingleEnquiry = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const getEnquiry = await Enquiry.findById(id);
        res.json(getEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

// Update Enquiry 
const updateEnquiry = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const updateEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})

// Delete Enquiry 
const deleteEnquiry = asyncHandler(async (req,res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deleteEnquiry = await Enquiry.findByIdAndDelete(id);
        res.json(deleteEnquiry)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createEnquiry, updateEnquiry, deleteEnquiry, getAllEnquirys, getSingleEnquiry }
