const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    loginEmail: String,
    password: String,
    companyName: String,
    companyLogoUrl: String,
    founder1: String,
    founder2: String,
    founder3: String,
    address: String,
    addressLink: String,
    email: String,
    website: String,
    mobile: Number,
    facebook: String,
    insta: String,
    twitter: String,
    linkedin: String,
    year: Number,
    nature: String,
    speciality1: String,
    speciality2: String,
    speciality3: String,
    products: [
        {
            name: String,
            image: String
        }
    ],
    gallery: [String],
    feedbacks: [
        {
            rating: String,
            name: String,
            feedback: String,
        }
    ],
    enquiries: [
        {
            name: String,
            email: String,
            mobile: String,
            enquiry: String,
        }
    ]
});

module.exports = mongoose.model('User', userSchema)