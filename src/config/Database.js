const mongoose = require('mongoose');

const url = 'mongodb+srv://';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
