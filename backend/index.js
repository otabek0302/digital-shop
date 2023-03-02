const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const createConnect = require('./database/db');
const cookieParser = require('cookie-parser');
const morgan = require('morgan')

// import routes
const user = require('./routes/userRoute');
const product = require('./routes/productRoute')
const blog = require('./routes/blogRoute')

// It is npm packet for showing routes and requests name
app.use(morgan("dev"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Cookies parser for refreshing token and seting tokens in cookie
app.use(cookieParser())

// config
dotenv.config({
    path: "backend/config/.env"
})
// connection Database in MANGO DB
createConnect()

// ------------------------------------------------------ //
// user routes useages
app.use('/api/user', user)
app.use('/api/product', product)
app.use('/api/blog', blog)



app.use(notFound)
app.use(errorHandler)

// create server 
app.listen(process.env.PORT, () => {
    console.log(`Server has started at PORT: ${process.env.PORT}`);
})