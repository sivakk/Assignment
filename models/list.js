const mongodb = require("mongoose");

const listSchema = mongodb.Schema({
    personName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});

const Person = (module.exports = mongodb.model("Person", listSchema));