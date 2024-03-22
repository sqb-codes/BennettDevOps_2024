const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect(
    // "mongodb://root:root@172.28.0.2:27017/?authSource=admin")
    "mongodb://root:root@mongo:27017/?authSource=admin")
    .then(() => {
        console.log("Mongo DB Started...");
    })
    .catch((err) => {
        console.log("Error :",err)
    });

app.get("/", (req, res) => {
    res.send("<h1>Hello world from Node with Docker</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started at PORT :",PORT);
});