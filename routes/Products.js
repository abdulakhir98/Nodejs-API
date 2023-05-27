const express = require("express");
const router = express.Router();
const { getAllProducts } = require('./ProductsController')
const { getProductByID } = require('./ProductsController')
const { addProduct } = require('./ProductsController')
const { updateProductByID } = require('./ProductsController')
const { deleteProductByID } = require('./ProductsController')

// Route

//get all products

router.get("/products", getAllProducts)

//get product by id

router.get("/product/:id", getProductByID)

//add a Product

router.post("/product", addProduct)

//update a product
router.put("/product/:id", updateProductByID)

// delete a product using id

router.delete("/product/:id", deleteProductByID)

module.exports = router;