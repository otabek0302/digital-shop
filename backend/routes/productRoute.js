const express = require('express');
const router = express.Router();
const {isAuthenticated, isAdmin } = require('../middleware/auth');
const { createProduct, getSingleProduct, getAllProducts } = require('../controller/productCtrl');


// Create Product
router.post('/', createProduct);

//Get All Products
router.get('/', getAllProducts)

//Get Single Product
router.get('/:id', getSingleProduct)


module.exports = router;