const express = require('express')
const router = express.Router()
const { isAuthenticated, isAdmin } = require('../middleware/auth')
const {
  createProduct,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
  uploadImages,
  deleteImages
} = require('../controller/productCtrl')
const { uploadPhoto } = require('../middleware/uploadImages')

// Create Product  ----- Admin
router.post('/', isAuthenticated, isAdmin, createProduct)

// Upload images in Product
router.put(
  '/upload',
  isAuthenticated,
  isAdmin,
  uploadPhoto.array('images', 10),
  uploadImages  
)

// Delete Images
router.delete('/delete-img/:id', isAuthenticated, isAdmin, deleteImages)

//Get All Products
router.get('/', getAllProducts)

//Add Product to User wishlist
router.put('/wishlist', isAuthenticated, addToWishList)

// Add Start to Product
router.put('/rating', isAuthenticated, rating)

//Get Single Product  ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleProduct)

//Update Product  ----- Admin
router.put('/:id', isAuthenticated, isAdmin, updateProduct)

//Delete Product  ----- Admin
router.delete('/:id', isAuthenticated, isAdmin, deleteProduct)

module.exports = router
