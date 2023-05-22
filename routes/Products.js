const express = require("express");
const router = express.Router();
const Product = require("../models/productModel")

// Route

//get all products

router.get("/", async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//get product by id

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//Add product

router.post("/", async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//update a product
router.put("/:id", async(req, res) =>{
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `Cannot find any product with id ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// delete a product using id

router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with id ${id}`});
        }
        res.status(200).json(product)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

module.exports = router;