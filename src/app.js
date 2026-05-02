let express = require("express");
const userModel = require("./model/product.model");
const productModel = require("./model/product.model");


let app = express();
app.use(express.json())
app.post("/products/create", async (req, res) => {
  try {
    let { name, price, description, category, stock } = req.body;
    if(!name || !price || !description || !category || !stock){
        return res.status(400).json({
            message:"all fields are reequired"
        })
    }
    

  let newProduct = await productModel.create({
    name,
    price,
    description,
    category,
    stock,
  });

  return res.status(201).json({
    message:"product created successfully",
    newProduct
  })
  } catch (error) {
    console.log("error in creation",error)
    return res.status(500).json({
        message:"Internal server error"
    })
  }
});
// get all products 
app.get('/products',async(req,res)=>{
   try {
     let products=await productModel.find()
     return res.status(200).json({
        message:"products get successfully",
        products

     })
   } catch (error) {
      return res.status(500).json({
        message:"Internal server error"
    })
   }


})
// get single products id
app.get('/products/:id',async(req,res)=>{
   try {
    let {id}=req.params
     let singleproduct=await productModel.findById(id)
     return res.status(200).json({
        message:"products get successfully by id",
        singleproduct

     })
   } catch (error) {
      return res.status(500).json({
        message:"Internal server error"
    })
   }


})

// update products by id

app.put('/products/update/:id', async (req, res) => {
  try {
    let { name, price, description, category, stock } = req.body;
    let {id}=req.params
    if(!name || !price || !description || !category || !stock){
        return res.status(400).json({
            message:"all fields are reequired"
        })
    }
    

  let updateduser = await productModel.findByIdAndUpdate(id,{
    name,
    price,
    description,
    category,
    stock,
  },{
    new:true
  });
console.log(id)
  return res.status(200).json({
    message:"product updated successfully",
    updateduser
  })
  } catch (error) {
    return res.status(500).json({
        message:"Internal server error"
    })
  }
});

app.delete('/products/delete/:id',async(req,res)=>{
    try {
        let {id}=req.params
       await productModel.findByIdAndDelete(id)
        return res.status(200).json({
            message:"product deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            filteredProducts
        })
    }
})


module.exports = app;
