const { ShardingManager } = require("discord.js");

require("dotenv").config();
const manager = new ShardingManager("./ToD.js", {
  totalShards: "auto",

  token: process.env.TOKEN
});
manager.spawn();
manager.on("shardCreate", (shard) => console.log(`Shard ${shard.id} launched`));