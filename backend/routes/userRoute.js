const express = require('express');
const router = express.Router();
const { createUser, loginUser, getAllUsers, getSingleUser, deleteUser, updateUser, blockUser, unBlockUser, handleRefreshToken, logoutUser, updatePassword, forgotPassword, resetPassword, loginAdmin, getWishList, saveAddress, userCart, getUserCart, emptyCart, applyCoupon } = require('../controller/userCtrl');
const {isAuthenticated, isAdmin } = require('../middleware/auth');


// Register User Route
router.post('/registration', createUser);

// Login User Route
router.post('/login', loginUser);

// Login Amin Route
router.post('/login-admin', loginAdmin);

// Logout User Route
router.get('/logout', logoutUser);

// Update User
router.put('/edit-user', isAuthenticated, updateUser)

// Update User's Password Route
router.put('/password', isAuthenticated, updatePassword);
// Forgot Password and Reset It
router.post('/forgot-password', forgotPassword)
// Forgot Password and Reset It
router.put('/reset-password/:token', resetPassword)

// Refresh User Token in Cookies
router.get('/refresh', handleRefreshToken)

// Create User Cart
router.post('/cart', isAuthenticated, userCart)
// Get Products from Cart 
router.get("/cart", isAuthenticated, getUserCart)
router.delete("/empty-cart", isAuthenticated, emptyCart)

// Get User wishlist
router.get('/wishlist', isAuthenticated, getWishList)

// Save User Address
router.put('/save-address', isAuthenticated, saveAddress)

// Apply Coupon 
router.post('/cart/applycoupon', isAuthenticated, applyCoupon)

// Admin Controller Functions -*-*--*-*--*-*--*-*--*-*-

// Get All Users ----- Admin
router.get('/all-users', isAuthenticated, isAdmin, getAllUsers)
// Get single User ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleUser)

// Delete User
router.delete('/:id', isAuthenticated, isAdmin, deleteUser)

// Blocked User
router.put('/block-user/:id', isAuthenticated, isAdmin, blockUser)
router.put('/unblock-user/:id', isAuthenticated, isAdmin, unBlockUser)



module.exports = router;