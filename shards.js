const { ShardingManager } = require('discord.js');
const logger = require('./modules/logger')
require('dotenv').config()
const Statcord = require('statcord.js')
const manager = new ShardingManager(`./ToD.js`, {token: process.env.Token, totalShards: 'auto'});
const chalk = require('chalk')

manager.spawn(undefined, undefined, -1)


manager.on("shardCreate", (shard) => {
    console.log(console.log(chalk.greenBright(`✅ - Launched shard #${shard.id}\n───────────────────────────────`)));
});

/*
const statcord = new Statcord.ShardingClient({
    key: "statcord.com-iFfsaDeC8KtKtUrlxgHk", //Beta: statcord.com-iFfsaDeC8KtKtUrlxgHk | ToD: statcord.com-iFfsaDeC8KtKtUrlxgHk
    manager,
    postCpuStatistics: true, 
    postMemStatistics: true, 
    postNetworkStatistics: true,
    autopost: true 
});


statcord.registerCustomFieldHandler(1, async (manager) => {
 
});

// Handler for custom value 2
statcord.registerCustomFieldHandler(2, async (manager) => {
    
});


statcord.on("autopost-start", () => {

    logger('Autopost Started', 'StatcordSuccess')
});

statcord.on("post", status => {

    if (!status) logger("Successful post", 'StatcordSuccess');
    else logger(status, 'StatcordError');
})

*/