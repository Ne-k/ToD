const { Schema, model } = require("mongoose");
module.exports = model(
  "Guild",
  new Schema({
    guildID: { type: String, default: null },
    allowNSFW: { type: Boolean, default: false },
  })
);
