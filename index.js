const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const port = 3000;

const courseModel = require('./app/models/courseModel');
// const courseRouter = require('./router/courseRouter');

//kết nối mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/CRUD_course365")
    .then(() => console.log("Connected to Mongo Successfully"))
    .catch(error => handleError(error));

// listen on port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})