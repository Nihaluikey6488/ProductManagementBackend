let mongoose=require('mongoose')

let connectDb=async()=>{
try {
    await mongoose.connect('mongodb+srv://nihalDb:nihal123@cluster0.b7u2ekw.mongodb.net/product')
    console.log("mongodb connected")
} catch (error) {
    console.log("error in connecting Database",error)
}
}

module.exports=connectDb