const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme 

const  itemSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = item = mongoose.model('item', itemSchema);