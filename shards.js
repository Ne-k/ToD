const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./ToD.js', { token: 'NzUyMzA2OTcwNDY3MjM3OTcw.X1Vudg.n2sgPbdCKSQBUeRrqFuERiQpstA', autoSpawn: true, totalShards: 2});
const chalk = require('chalk')
manager.on('shardCreate', shard => console.log(chalk.greenBright(`✅ - Launched shard #${shard.id}\n───────────────────────────────`)));
manager.spawn()