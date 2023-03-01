const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');

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
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    refreshToken: { 
        type: String 
    }
},{
    timestamps: true,
});

// hashing password for security
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt)

})

// checking passwrod for login
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


//Export the model
module.exports = mongoose.model('User', userSchema);