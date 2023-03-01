const mongoose = require('mongoose');


const createConnect = () => {
    try {
        const connect = mongoose.connect(process.env.MONGO_DB)
        console.log(`Database connected Successfully !!!`);
    } catch (error) {
        // throw new Error(error)
        console.log('Database Error')
    }
}

module.exports = createConnect;