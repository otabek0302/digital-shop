const express = require('express');
const router = express.Router();
const { createUser, loginUser, getAllUsers, getSingleUser, deleteUser, updateUser, blockUser, unBlockUser, handleRefreshToken, logoutUser } = require('../controller/userCtrl');
const {isAuthenticated, isAdmin } = require('../middleware/auth');


// Register User Route
router.post('/registration', createUser);

// Login User Route
router.post('/login', loginUser);

// Logout User Route
router.get('/logout', logoutUser);

// Update User
router.put('/edit-user', isAuthenticated, updateUser)

// Refresh User Token in Cookies
router.get('/refresh', handleRefreshToken)

// Admin Controller Functions -*-*--*-*--*-*--*-*--*-*-

// Get All Users ----- Admin
router.get('/all-users', getAllUsers)

// Get single User ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleUser)

// Delete User
router.delete('/:id', deleteUser)

// Blocked User
router.put('/block-user/:id', isAuthenticated, isAdmin, blockUser)
router.put('/unblock-user/:id', isAuthenticated, isAdmin, unBlockUser)


module.exports = router;