const { ShardingManager } = require('discord.js');
require('dotenv').config()
const manager = new ShardingManager('./ToD.js', { 
token: process.env.Token, 
autoSpawn: true, 
respawn: true,
amount: "3"
});
const chalk = require('chalk')
manager.on("shardCreate", (shard) => {
    console.log(console.log(chalk.greenBright(`✅ - Launched shard #${shard.id}\n───────────────────────────────`)));
});
manager.spawn({ amount: undefined, delay: undefined, timeout: -1 });
