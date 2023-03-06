const express = require('express');
const router = express.Router();
const {isAuthenticated, isAdmin } = require('../middleware/auth');
const { createColor, updateColor, getAllColors, deleteColor, getSingleColor } = require('../controller/colorCtrl');

// Create Color ----- Admin
router.post('/', isAuthenticated, isAdmin, createColor);

// Get All Categories ----- Admin
router.get('/', isAuthenticated, isAdmin, getAllColors);

// Get Single Color ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleColor);

// Update Color ----- Admin
router.put('/:id', isAuthenticated, isAdmin, updateColor);

// Delete Color ----- Admin
router.delete('/:id', isAuthenticated, isAdmin, deleteColor);



module.exports = router;