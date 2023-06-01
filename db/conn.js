const express = require("express");
const app = express();
// Load environment variables
require("../config/LoadEnvironment");
const connectionString = process.env.ATLAS_URI || "";
const PORT = process.env.PORT || 5500;
const mongoose = require("mongoose");

mongoose
    .connect(connectionString)
    .then(() => {
        console.log(`Connected to MongoDB`);
        // app.listen(PORT, () => {
        //     console.log(`NodeJS API is running on port: ${PORT}`)
        // })
    })
    .catch((error) => {
        console.log(error);
    });
