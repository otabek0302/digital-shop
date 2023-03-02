const express = require('express');
const router = express.Router();
const {isAuthenticated, isAdmin } = require('../middleware/auth');
const { createProduct, getSingleProduct, getAllProducts, updateProduct, deleteProduct } = require('../controller/productCtrl');

// Create Product  ----- Admin
router.post('/',isAuthenticated, isAdmin, createProduct);

//Get All Products
router.get('/', getAllProducts)

//Get Single Product  ----- Admin
router.get('/:id',isAuthenticated, isAdmin, getSingleProduct)

//Update Product  ----- Admin
router.put('/:id',isAuthenticated, isAdmin, updateProduct)

//Delete Product  ----- Admin
router.delete('/:id',isAuthenticated, isAdmin, deleteProduct)


module.exports = router;