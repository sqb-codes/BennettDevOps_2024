const express = require("express");
const mongoose = require("mongoose");
const {MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT} = require("./config/config");
const app = express();
const postRouter = require("./routes/postRoutes");

const Mongourl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose.connect(
    // "mongodb://root:root@172.28.0.2:27017/?authSource=admin")
    // "mongodb://root:root@mongo:27017/?authSource=admin")
    Mongourl)
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

app.use(express.json());
app.use("/api/v1/posts", postRouter);

app.listen(PORT, () => {
    console.log("Server started at PORT :",PORT);
});