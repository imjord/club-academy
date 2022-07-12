const {Schema, model} = require('mongoose');


const ClubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    image: {
        type: String,
        required: true,
        default: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const Club = new model("Club", ClubSchema);

module.exports = Club;