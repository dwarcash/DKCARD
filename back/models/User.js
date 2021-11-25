const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    loginEmail: String,
    password: String,
    companyName: String,
    companyLogoUrl: String,
    founders: String,
    address: String,
    addressLink: String,
    email: String,
    website: String,
    mobile: String,
    year: String,
    nature: String,
    specialities: String,
});

module.exports = mongoose.model('User', userSchema)