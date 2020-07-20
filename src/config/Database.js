const mongoose = require('mongoose');

const url = // configuração do mongodb

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
