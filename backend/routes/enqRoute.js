const express = require('express');
const router = express.Router();
const {isAuthenticated, isAdmin } = require('../middleware/auth');
const { createEnquiry, updateEnquiry, getAllEnquirys, deleteEnquiry, getSingleEnquiry } = require('../controller/enqCtrl');

// Create Enquiry ----- Admin
router.post('/',  createEnquiry);

// Get All Categories ----- Admin
router.get('/', isAuthenticated, isAdmin, getAllEnquirys);

// Get Single Enquiry ----- Admin
router.get('/:id', isAuthenticated, isAdmin, getSingleEnquiry);

// Update Enquiry ----- Admin
router.put('/:id', isAuthenticated, isAdmin, updateEnquiry);

// Delete Enquiry ----- Admin
router.delete('/:id', isAuthenticated, isAdmin, deleteEnquiry);



module.exports = router;