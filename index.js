const express = require('express')
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5500

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const userRoute = require('./routes/Products');

app.use("/product", userRoute);

// Home Route!

app.get("/",(req, res) => {
    res.send("Hello World")
})

mongoose.
connect('mongodb+srv://akhirbusiness:zain123@akhirapi.z32zbw5.mongodb.net/NodeAPI?retryWrites=true&w=majority')
.then(() =>{
    console.log(`Connected to MongoDB`)
    app.listen(PORT, () => {
        console.log(`NodeJS API is running on port: ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})