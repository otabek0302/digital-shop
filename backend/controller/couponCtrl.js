const Coupon = require('../models/couponModel')
const validateMongodbId = require('../utils/validateMongodbId')
const asyncHandler = require('express-async-handler')

// create coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body)
    res.json(newCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

// get all coupons
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const getCoupons = await Coupon.find();
    res.json(getCoupons)
  } catch (error) {
    throw new Error(error)
  }
})

// get single coupon
const getSingleCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
    const getCoupon = await Coupon.findById(id);
    res.json(getCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

// get single coupon
const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.json(updateCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

// get single coupon
const deleteCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteCoupon)
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = { createCoupon, getAllCoupons, getSingleCoupon, updateCoupon, deleteCoupon }
