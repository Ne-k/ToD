const { ShardingManager } = require('discord.js');
const Statcord = require('statcord.js')
require('dotenv').config()
const manager = new ShardingManager('./ToD.js', { 
token: process.env.Token, 
autoSpawn: true, 
respawn: true,
});
require('colors')
manager.on("shardCreate", (shard) => {
    console.log(`Sharding Manager: `.green + `Launched shard #${shard.id}\n─────────────────────────────── `);
});


manager.spawn({ amount: 'auto', delay: undefined, timeout: -1 });