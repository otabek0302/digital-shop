const express = require('express');
const router = express.Router();
const {isAuthenticated, isAdmin } = require('../middleware/auth');
const { createCategory, updateCategory, getAllCategories, deleteCategory, getSingleCategory } = require('../controller/categoryCtrl');

// Create Category ----- Admin
router.post('/', isAuthenticated, isAdmin, createCategory);

// Get All Categories ----- Admin
router.get('/', isAuthenticated, isAdmin, getAllCategories);

// Get Single Category ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleCategory);

// Update Category ----- Admin
router.put('/:id', isAuthenticated, isAdmin, updateCategory);

// Delete Category ----- Admin
router.delete('/:id', isAuthenticated, isAdmin, deleteCategory);



module.exports = router;