const cloudinary = require('cloudinary')
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv');

// config
dotenv.config({
  path: "backend/config/.env"
})

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
})

// Uploading Image
const cloudinaryUploadImage = asyncHandler(async fileToUploads => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(fileToUploads, result => {
      resolve(
        {
            url: result.secure_url,
        },
        {
            resource_type: "auto",
        }
      )
    })
  })
})

module.exports = cloudinaryUploadImage;
