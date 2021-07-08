const { ShardingManager } = require('discord.js');
const logger = require('./modules/logger')
const Statcord = require('statcord.js')
const manager = new ShardingManager('./ToD.js', { token: 'NzU0ODc1MjAxMjM3NTQ5MTI2.X17GUA.PJdkmqkbB_wBVAS_wLiVaPMeljM', autoSpawn: true, respawn: true});
const chalk = require('chalk')
// Create statcord sharding client
const statcord = new Statcord.ShardingClient({
    key: "statcord.com-iFfsaDeC8KtKtUrlxgHk",
    manager,
    postCpuStatistics: true, /* Whether to post CPU statistics or not, defaults to true */
    postMemStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    postNetworkStatistics: true, /* Whether to post memory statistics or not, defaults to true */
    autopost: true /* Whether to auto post or not, defaults to true */
});

/* Register custom fields handlers (these are optional, you are not required to use this function)
* These functions are automatically run when posting
*/
// Handler for custom value 1
statcord.registerCustomFieldHandler(1, async (manager) => {
    // Get and return your data as a string
});

// Handler for custom value 2
statcord.registerCustomFieldHandler(2, async (manager) => {
    // Get and return your data as a string
});

// Spawn shards, statcord works with both auto and a set amount of shards
manager.spawn('auto', 10000, 30000);

// Normal shardCreate event
manager.on("shardCreate", (shard) => {
    console.log(console.log(chalk.greenBright(`✅ - Launched shard #${shard.id}\n───────────────────────────────`)));
});

statcord.on("autopost-start", () => {
    // Emitted when statcord autopost starts
    logger('Autopost Started', 'StatcordSuccess')
});

statcord.on("post", status => {
    // status = false if the post was successful
    // status = "Error message" or status = Error if there was an error
    if (!status) logger("Successful post", 'StatcordSuccess');
    else logger(status, 'StatcordError');
})
