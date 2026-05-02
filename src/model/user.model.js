const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    category:String,
    stock:Number,
    
},{
    timestamps:true
})

const userModel=mongoose.model("products",userSchema)

module.exports=userModel