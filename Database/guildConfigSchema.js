const mongoose = require('mongoose');

module.exports = mongoose.model("GuildConfig", new mongoose.Schema({
    guildID: String,
    guildName: String,

    config: {
        nsfwToggle: {type: Boolean, default: false},
        votingToggle: {type: Boolean, default: true},
    }
}))