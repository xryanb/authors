const mongoose = require('mongoose');


const AuthorSchema = new mongoose.Schema({
    author: { type: String,
    required:[true,'author is required'],
    minlength:[4,'author must be 4 characters long']
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

