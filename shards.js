const { ShardingManager } = require('discord.js');
const EventEmitter = require('events');
const Statcord = require('statcord.js')
require('dotenv').config()


const manager = new ShardingManager('./ToD.js', { 
token: process.env.token, 
autoSpawn: true, 
respawn: true,
});

const statcord = new Statcord.ShardingClient({
    key: "statcord.com-iFfsaDeC8KtKtUrlxgHk",
    manager,
    postCpuStatistics: true, /* Whether to post CPU statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    autopost: true /* Whether to auto post or not, defaults to true */
});



require('colors')
manager.on("shardCreate", (shard) => {
    console.log(`Sharding Manager: `.green + `Launched shard #${shard.id}\n─────────────────────────────── `);
});


manager.spawn({ amount: 'auto', delay: undefined, timeout: -1 });
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