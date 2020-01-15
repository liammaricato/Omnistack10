const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    biografia: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', DevSchema);