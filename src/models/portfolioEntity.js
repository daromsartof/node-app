const { default: mongoose } = require("mongoose")

const shema = mongoose.Schema({
    usprTitle : String,
    usprDescription : String,
    usprImagePath:String
  })
  
const portfolioEntity = mongoose.model('portfolio',shema)

module.exports = portfolioEntity