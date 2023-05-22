const express = require('express')
const app = express()

// Route

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.listen(5500,() => {
    console.log('NodeJS API is running')
})