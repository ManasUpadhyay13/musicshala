const mongoose = require("mongoose")
const { Schema} = mongoose


const userSchema = new Schema({
    name : {
        type : String
    },
    email :{
        required: true,
        type : String,
        unique : true
    },
    password : {
        type : String
    }
})

const userList = mongoose.model('userList', userSchema)
module.exports = userList