const { ShardingManager } = require('discord.js');
require('dotenv').config();
const chalk = require('chalk');

const manager = new ShardingManager('./index.js', { token: process.env.TOKEN });
manager.spawn().then(r => console.log(chalk.greenBright(`Shards • Spawned ${r.size} shards`)));