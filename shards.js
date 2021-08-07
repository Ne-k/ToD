const { ShardingManager } = require('discord.js');
const logger = require('./modules/logger')
const Statcord = require('statcord.js')
require('dotenv').config()
const manager = new ShardingManager('./ToD.js', { 
token: process.env.Token, 
autoSpawn: true, 
respawn: true,
});
const chalk = require('chalk')
manager.on("shardCreate", (shard) => {
    console.log(console.log(chalk.greenBright(`✅ - Launched shard #${shard.id}\n───────────────────────────────`)));
});
manager.spawn();
