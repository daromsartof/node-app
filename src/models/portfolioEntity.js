const { default: mongoose } = require("mongoose")

const shema = mongoose.Schema({
    usprTitle : String,
    usprDescription : String,
    usprImagePath:String
  })
  
const model = mongoose.model('portfolio',shema)

exports.portfolioEntity = model