const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        required: [true, 'Uploaded file must have name']
    }
})

const File = mongoose.model('File', fileSchema)

module.exports = File