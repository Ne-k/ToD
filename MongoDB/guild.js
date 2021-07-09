const { Schema, model } = require("mongoose");
module.exports = model(
  "guild",
  new Schema({
    guildID: String,
    prefix: { type: String, default: "t;" }
  })
);