const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseCode: {
        type: String,
        unique: true,
        required: true
    },
    courseCode: {
        type: String,
        unique: true,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    teacherPhoto: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean,
        default: true
    },
    isTrending: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Course', courseSchema);