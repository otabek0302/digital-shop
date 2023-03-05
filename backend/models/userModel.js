const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
const crypto = require('crypto')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required: [true, "Please your enter Name"],
        index:true,
    },
    lastname:{
        type:String,
        required: [true, "Please your enter Last Name"],
        index:true,
    },
    email:{
        type:String,
        required: [true, "Please your enter Email"],
        unique:true,
    },
    mobile:{
        type:String,
        required: [true, "Please your enter Mobile"],
        unique:true,
    },
    password:{
        type:String,
        required: [true, "Please your enter Password"],
    },
    role: {
        type: String,
        default: 'user'
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    card: {
        type: Array,
        default: [],
    },
    address: {
        type: String,
        required: true,
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    refreshToken: { 
        type: String 
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
},{
    timestamps: true,
});

// hashing password for security
userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt)
})

// reset password
userSchema.methods.createPasswordResetToken = async function () {
    const resettoken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash("sha256").update(resettoken).digest('hex');
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
    return resettoken;
}

// checking passwrod for login
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


//Export the model
module.exports = mongoose.model('User', userSchema);