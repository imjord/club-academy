const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/mynewdbbro");



module.exports = mongoose.connection;