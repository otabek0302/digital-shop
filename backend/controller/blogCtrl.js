const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongodbId = require('../utils/validateMongodbId')

// Create a blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body)
    res.json(newBlog)
  } catch (error) {
    throw new Error(error)
  }
})

// Update Blog
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.json(updateBlog)
  } catch (error) {
    throw new Error(error)
  }
})

// Get Single Blog
const getSingleBlog = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const getBlog = await Blog.findById(id).populate('likes').populate('dislikes')
    const updateViews = await Blog.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: Number(1) }
      },
      {
        new: true
      }
    )
    res.json(getBlog)
  } catch (error) {
    throw new Error(error)
  }
})

// Get all Blogs
const getAllBlog = asyncHandler(async (req, res) => {
  try {
    const getBlogs = await Blog.find()
    res.json(getBlogs)
  } catch (error) {
    throw new Error(error)
  }
})

// Update Blog
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
      const deletedBlog = await Blog.findByIdAndDelete(id)
      res.json(deletedBlog)
    } catch (error) {
      throw new Error(error)
    }
})

// Like Blog
const likeBlog = asyncHandler(async (req,res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);
  
    // Find a blog which you want to liked
    const blog = await Blog.findById(blogId);
    // Find login user
    const loginUserId = req?.user?._id;
    // Find if the user has liked the post 
    const isLiked = blog?.isLiked;
    // Find if the user disliked the post
    const alreadyDisliked = blog?.dislikes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    );
  
    if (alreadyDisliked) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, 
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        }, 
        { new: true }
      );
      res.json(updatedBlog);
    } else if (isLiked) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, 
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        }, 
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, 
        {
          $push: { likes: loginUserId },
          isLiked: true,
        }, 
        { new: true }
      );
      res.json(updatedBlog);
    }
});
  
// Dislike the Blog
const disLikeBlog = asyncHandler(async (req,res) => {
    const { blogId } = req.body;
    validateMongodbId(blogId);
  
    // Find a blog which you want to liked
    const blog = await Blog.findById(blogId);
    // Find login user
    const loginUserId = req?.user?._id;
    // Find if the user has liked the post 
    const isDisLiked = blog?.isDisliked;
    // Find if the user disliked the post
    const alreadyLiked = blog?.likes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    );
  
    if (alreadyLiked) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, 
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        }, 
        { new: true }
      );
      res.json(updatedBlog);
    } else if (isDisLiked) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, 
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        }, 
        { new: true }
      );
      res.json(updatedBlog);
    } else {
      const updatedBlog = await Blog.findByIdAndUpdate(
        blogId, 
        {
          $push: { dislikes: loginUserId },
          isDisliked: true,
        }, 
        { new: true }
      );
      res.json(updatedBlog);
    }
});
  

module.exports = { createBlog, updateBlog, getSingleBlog, getAllBlog, deleteBlog, likeBlog, disLikeBlog }
