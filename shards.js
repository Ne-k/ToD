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

const statcord = new Statcord.ShardingClient({
    key: "statcord.com-iFfsaDeC8KtKtUrlxgHk", //Beta: statcord.com-iFfsaDeC8KtKtUrlxgHk | ToD: statcord.com-iFfsaDeC8KtKtUrlxgHk
    manager,
    postCpuStatistics: true, /* Whether to post CPU statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    autopost: true 
});


statcord.registerCustomFieldHandler(1, async (manager) => {
});


statcord.registerCustomFieldHandler(2, async (manager) => {
});


manager.spawn({ amount: 'auto', delay: undefined, timeout: -1 });


statcord.on("autopost-start", () => {
    logger('Autopost Started', 'StatcordSuccess')
});

statcord.on("post", status => {
    if (!status) logger("Successful post", 'StatcordSuccess');
    else logger(status, 'StatcordError');
})
