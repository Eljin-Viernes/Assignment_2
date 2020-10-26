//File Name: Week 6
//Eljin Viernes
//300750971
//October 25, 2020

let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    contact_number: String,
    email_address: String
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);