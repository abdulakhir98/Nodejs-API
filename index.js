const express = require('express')
const app = express()
require('./db/conn');
require('./LoadEnvironment.js')
const PORT = process.env.PORT

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const productRoute = require('./routes/Products');

app.use("/", productRoute);

// Home Route!

app.get("/",(req, res) => {
    res.send("Hello World")
})


app.listen(PORT, () => {
    console.log(`NodeJS API is running on port: ${PORT}`)
})