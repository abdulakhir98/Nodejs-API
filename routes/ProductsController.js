const Product = require("../models/productModel")

//get all Products

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
};

//get a Product by ID

const getProductByID = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
};

//add a Product

const addProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
};

//update a Product by ID

const updateProductByID = async(req, res) =>{
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
};

//delete a Product by ID

const deleteProductByID = async(req, res) => {
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
};

module.exports = { getAllProducts, getProductByID, addProduct, updateProductByID, deleteProductByID };