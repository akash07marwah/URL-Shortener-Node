const mongoose = require('mongoose')
const UrlSchema = new mongoose.Schema({
    longUrl:String,
    shortUrl:String,
    urlCode:String,
    date:{ type:String, default: Date.now },
    clicks:{ type: Number, default: 0 }
})

module.exports = mongoose.model('Url',UrlSchema)