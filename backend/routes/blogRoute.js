const express = require("express");
const { createBlog, updateBlog, getSingleBlog, getAllBlog, deleteBlog, likeBlog, disLikeBlog } = require("../controller/blogCtrl");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const router = express.Router();


// Create Blog
router.post('/', isAuthenticated, isAdmin, createBlog);

// Like Blog
router.put("/likes", isAuthenticated, likeBlog);
router.put("/dislikes", isAuthenticated, disLikeBlog);

// Get All Blog
router.get('/', getAllBlog);

// Get Single Blog
router.get('/:id', getSingleBlog);

// Update Blog
router.put('/:id', isAuthenticated, isAdmin, updateBlog);

// Delete Blog
router.delete('/:id', isAuthenticated, isAdmin, deleteBlog);




module.exports = router;
