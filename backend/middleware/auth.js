const User = require('../models/userModel');
const JWT  = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// checking is user loged or not
const isAuthenticated = asyncHandler(async (req,res, next) => {
    let token;
    if (req?.headers?.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1];
        try {
            if(token){
                const decoded = JWT.verify(token, process.env.JWT_SECRET)
                const user = await User.findById(decoded?.id)
                req.user = user;
                next();
            }
        } catch (error) {
            throw new Error("Not Authorized token expired, Please login again")
        }
    }else{
        throw new Error(' There is no token attached to headers ')
    }
})

// is user Admin or user
const isAdmin = asyncHandler(async (req,res, next) => {
    const { email } = req.user;
    const adminUser = await User.findOne({ email });

    if (adminUser.role !== "admin") {
        throw new Error('You are not admin !')
    }else{
        next()
    }
})


module.exports = { isAuthenticated, isAdmin }