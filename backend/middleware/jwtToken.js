const jwt = require('jsonwebtoken');

// set a token for recogination
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '24h'})
}

// refresh token and set it in cookie -> * we use this function on login controller
const refreshUserToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '24h'})
}

module.exports = { generateToken, refreshUserToken }