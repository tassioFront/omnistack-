const mongoose = require('mongoose')

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId, //referencia ao Schema User
        ref: 'User'
    }
})

module.exports = mongoose.model('Spot', SpotSchema)