const { default: mongoose } = require("mongoose");
const { constant } = require("../utils/constant");

mongoose.connect(`mongodb+srv://${constant.user}:${constant.mdp}@cluster0.ouzsftf.mongodb.net/?retryWrites=true&w=majority`);
const db = mongoose.connection
db.on('error', () => {
  console.error('error connection');
});

db.once('open', () => {
  console.log('db connected');
});

exports.db = db
