const express = require('express');
const router = express.Router();
const {isAuthenticated, isAdmin } = require('../middleware/auth');
const { createBrand, updateBrand, getAllBrands, deleteBrand, getSingleBrand } = require('../controller/brandCtrl');

// Create Brand ----- Admin
router.post('/', isAuthenticated, isAdmin, createBrand);

// Get All Categories ----- Admin
router.get('/', isAuthenticated, isAdmin, getAllBrands);

// Get Single Brand ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleBrand);

// Update Brand ----- Admin
router.put('/:id', isAuthenticated, isAdmin, updateBrand);

// Delete Brand ----- Admin
router.delete('/:id', isAuthenticated, isAdmin, deleteBrand);



module.exports = router;