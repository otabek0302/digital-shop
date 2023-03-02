const asyncHandler = require('express-async-handler')
const sendMail = require('../utils/sendMail')
const validateMongodbId = require('../utils/validateMongodbId')
const { generateToken, refreshUserToken } = require('../middleware/jwtToken')
const crypto = require('crypto');
const JWT = require('jsonwebtoken')
const User = require('../models/userModel')

// Register User
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email
  const findUser = await User.findOne({ email: email })
  if (!findUser) {
    // create a new user
    const newUser = await User.create(req.body)
    res.json(newUser)
  } else {
    // user already registered
    throw new Error('User is already Exists')
  }
})

/// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // check is there any data in input
  if (!email || !password) {
    return new Error('Please enter your Email & password')
  }

  // check if user exists or not
  const findUser = await User.findOne({ email: email })
  if (findUser && (await findUser.isPasswordMatched(password))) {
    // set a token in cookie for recognizing -> * Start
    const refreshToken = await refreshUserToken(findUser?._id)
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken
      },
      {
        new: true
      }
    )
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000
    })
    // set a token in cookie for recognizing -> * End
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id)
    })
  } else {
    // if user is not
    throw new Error('User is not found with this email & password')
  }
})

// Logout from Profile
const logoutUser = asyncHandler(async (req,res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error('No Refresh Token in Cookies');
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        })
        return  res.sendStatus(204); //forbitten
    }
    await User.findOneAndUpdate(refreshToken, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204) // forbitten
})

// Reset User's password
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongodbId(_id)

  const user = await User.findById(_id)
  if (password) {
    user.password = password;
    const updatePassword = await user.save();
    res.json(updatePassword)
  }else{
    res.json(user)
  }
})

// Forgot Password and reset it
const forgotPassword = asyncHandler(async (req,res) => {
  const { email } = req.body;
  const user = await User.findOne({ email })

  if (!user) throw new Error('User not found with thid email');

  try {
    // Get ResetPassword Token
    const token = await user.createPasswordResetToken();
    await user.save();
    
    const resetUrl  = `Hi, Please follow this link to reset your Password. Your password reset token is : <a href='${req.protocol}://${req.get('host')}/api/user/reset-password/${token}'>Click Here</a> `
    await sendMail({
      email: email,
      text: 'Hey User',
      subject: `User Password Recovery`,
      html: resetUrl,
    })

    res.status(200).json({
      message: `Email send to ${user.email} succesfully `
    })
  } catch (error) {
    throw new Error(error)
  }
})

// Reset Password 
const resetPassword = asyncHandler(async (req,res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if(!user) throw new Error('Token Expired, Please try again leter !');
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user)
})

// handle refresh token for ---
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error('No Refresh Token in Cookies');
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken })
    if(!user) throw new Error('There was a Error in Data Base with User');
    JWT.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error('There is something wrong with refresh token')
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken })
    })
    res.json(user)
})

// Update User
const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user
  validateMongodbId(_id)
  try {
    const updatedUser = await User.findByIdAndUpdate(_id, {
      firstname: req?.body?.firstname,
      lastname: req?.body?.lastname,
      email: req?.body?.email,
      mobile: req?.body?.mobile
    })
    res.json(updatedUser)
  } catch (error) {
    throw new Error(error)
  }
})

// Admin Controller Functions -*-*--*-*--*-*--*-*--*-*-

// Get all users ----- Admin
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find()
    res.json(getUsers)
  } catch (error) {
    throw new Error(error)
  }
})

// Get a single User ----- Admin
const getSingleUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodbId(id)
  try {
    const getUser = await User.findById(id)
    res.json({
      getUser,
      success: true
    })
  } catch (error) {
    throw new Error(error)
  }
})

// Delete User ----- Admin
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodbId(id)
  try {
    const deleteUser = await User.findByIdAndDelete(id)
    res.json({
      deleteUser
    })
  } catch (error) {
    throw new Error(error)
  }
})

// Block User
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodbId(id)
  try {
    const block = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true
      },
      {
        new: true
      }
    )
    res.json({
      message: 'User Blocked',
      block
    })
  } catch (error) {
    throw new Error(error)
  }
})

// Unblock User
const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params
  validateMongodbId(id)
  try {
    const unBlock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false
      },
      {
        new: true
      }
    )
    res.json({
      message: 'User Un Blocked',
      unBlock
    })
  } catch (error) {
    throw new Error(error)
  }
})
module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logoutUser,
  updatePassword,
  forgotPassword,
  resetPassword,
}
