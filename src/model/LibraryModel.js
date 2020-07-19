const mongoose = require('../config/Database');
const { mongo } = require('../config/Database');

const Schema = mongoose.Schema

const LibrarySchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    avatar_url: {type: String, required: true},
    publishing_company: {type: String, required: true},
    authors: {type: String, required: true},
    category: {type: String, required: true}
});

module.exports = mongoose.model('Library', LibrarySchema);