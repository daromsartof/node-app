const { default: mongoose } = require("mongoose")

const skilsEntityShema = mongoose.Schema({
    uskImageUrl : String,
    uskTitle : String,
    uskValue : Number
})

const shema = mongoose.Schema({
    userSkils: [skilsEntityShema],
    uskCatTitle: String
})
  
const skilsEntity = mongoose.model('Skils',shema)

module.exports = skilsEntity