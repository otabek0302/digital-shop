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
const cloudinaryUploadImage = asyncHandler(async (fileToUploads, folderName) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUploads, result => {
      resolve(
        {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id
        },
        {
          resource_type: "auto",
          folder: folderName
      }
      )
    })
  })
})

const cloudinaryDeleteImage = asyncHandler(async (fileToDelete) => {
  return new Promise((resolve) => {
    cloudinary.uploader.destroy(fileToDelete, result => {
      resolve(
        {
            url: result.secure_url,
            asset_id: result.asset_id,
            public_id: result.public_id
        },
        {
          resource_type: "auto",
          folder: folderName
      }
      )
    })
  })
})

module.exports = {cloudinaryUploadImage, cloudinaryDeleteImage}
