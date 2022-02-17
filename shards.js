const {ShardingManager} = require("discord.js");
require("dotenv").config();

const manager = new ShardingManager("./ToD.js", {
    token: process.env.token,
    autoSpawn: true,    
    mode: "worker",
    totalShards: "auto",
});

require("colors");
manager.on("shardCreate", (shard) => {
    console.log(`Sharding Manager: `.green + `Launched shard #${shard.id}\n─────────────────────────────── `);
});

manager.spawn({amount: "auto", delay: undefined, timeout: -1});
/*
statcord.on("autopost-start", () => {
    // Emitted when statcord autopost starts
    console.log(`Statcord: `.yellow + "[ Started autopost ]");
});

statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
    if (!status) console.log(`Statcord: `.yellow + "[ Successful post ]");
    else console.error(status);
});
*/
