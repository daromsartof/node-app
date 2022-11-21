const { default: mongoose } = require("mongoose");
require('dotenv').config()
mongoose.connect(process.env.MONGOS_DB);
const db = mongoose.connection
db.on('error', () => {
  console.error('error connection');
});

db.once('open', () => {
  console.log('db connected');
});

exports.db = db
