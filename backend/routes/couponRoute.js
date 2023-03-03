const express = require("express");
const { createCoupon, getAllCoupons, getSingleCoupon, updateCoupon, deleteCoupon } = require("../controller/couponCtrl");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const router = express.Router();

// create Coupon
router.post('/', isAuthenticated, isAdmin, createCoupon)

// get all Coupon
router.get('/', isAuthenticated, isAdmin, getAllCoupons)

// get single Coupon
router.get('/:id', isAuthenticated, isAdmin, getSingleCoupon)

// update single Coupon
router.put('/:id', isAuthenticated, isAdmin, updateCoupon)

// get single Coupon
router.delete('/:id', isAuthenticated, isAdmin, deleteCoupon)


module.exports = router;