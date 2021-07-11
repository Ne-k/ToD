const { ShardingManager } = require('discord.js');
const logger = require('./modules/logger')
require('dotenv').config()
const Statcord = require('statcord.js')
const manager = new ShardingManager('./ToD.js', { token: process.env.Token, autoSpawn: true, respawn: true});
const chalk = require('chalk')

// Spawn shards, statcord works with both auto and a set amount of shards

// Normal shardCreate event
manager.on("shardCreate", (shard) => {
    console.log(console.log(chalk.greenBright(`✅ - Launched shard #${shard.id}\n───────────────────────────────`)));
});
manager.spawn();
