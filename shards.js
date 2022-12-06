const { ShardingManager } = require('discord.js');
const Statcord = require('statcord.js');
require('dotenv').config();
require("@colors/colors")

const manager = new ShardingManager('./index.js', { token: process.env.TOKEN });
manager.spawn()

const statcord = new Statcord.ShardingClient({
    key: "statcord.com-ZTJm4UOf3R2ZybIVIGPM",
    manager,
    postCpuStatistics: true,
    postMemStatistics: true,
    postNetworkStatistics: true,
    autopost: true
});
statcord.on("autopost-start", () => {
    console.log("[ Statcord ]".green + " Started autoposting".magenta);
});

statcord.on("post", status => {

    if (!status) console.log("[ Statcord ] ".green + "Successfully posted stats to Statcord");
    else console.error(status);
});
