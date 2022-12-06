const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const userList = require('./models/User')

app.use(cors({
    origin : "*"
}))

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/spotify-clone',()=>{
    console.log("connected to mongo")
})


// to sign a user

app.post('/signup',async(req,res)=>{
    const { name , email , password} = req.body
    const findUser =await userList.findOne({email})
    if(findUser){
        return res.json({message : 'email already registered'})
    }
    else if((name.length)<4){
        res.json({message : 'name must be greated than 4 characters'})
    }
    else if((password.length)<=5){
        res.json({message : 'password must be greated than 5 characters'})
    }
    else{
        const pass = await bcrypt.hash(password , 10)
        try {
            await userList.create({
                name : name,
                email : email ,
                password : pass
            })
            res.json({message : "success"})
        } catch (error) {
            res.json({message : "Internal server error"})
        }
    }
})

// to log in user

app.post('/login',async (req ,res)=>{
    const {email , password}= req.body
    const findEmail = await userList.findOne({email})
    if(!findEmail){
        return res.json({message: "The email has not been found"})
    }
    else{
        try {
            
            const checkPass = await bcrypt.compare(password , findEmail.password)
            if(checkPass){
                return res.json({message : "success"})
            }
            else{
                return res.json({message : "The password is wrong"})
            }
        } catch (error) {
            return res.json({message : "Internal server error"})
        }
    }
})
app.listen(8080,()=>{
    console.log('haa sun rha hu')
})