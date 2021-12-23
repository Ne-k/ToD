//====================================================================================CONSTANTS REQUIRED ON READY=============================================================================================
const {Client, MessageEmbed, Intents, WebhookClient} = require("discord.js");
const Discord = require("discord.js");
const client = new Client({
    disableMentions: "everyone",
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const fs = require("fs");
const db = require("quick.db");
const path = require("path");
require("dotenv").config();
//============================================================================================================================================================================================================
const moment = require("moment");
const mongoose = require("mongoose");
const {Collection: MongoCollection, MongoClient} = require("mongodb");
const {Collection, Fields} = require("quickmongo");
client.db = db;
client.slash = new Discord.Collection();
client.tod = require("./ToD.json");
client.messageembed = MessageEmbed;
client.logger = require("./modules/logger");
//====================================================================================COLLECTIONS REQUIRED ON READY===========================================================================================
client.aliases = new Discord.Collection();

//============================================================================================================================================================================================================

//============================================================================================INITIALIZING====================================================================================================
["aliases", "commands"].forEach((x) => (client[x] = new Discord.Collection()));
["console", "command", "event"].forEach((x) =>
    require(`./handler/${x}`)(client)
);

client.categories = fs.readdirSync("./commands/");

["command"].forEach((handler) => {
    require(`./handler/${handler}`)(client);
});

const mongo = new MongoClient(process.env.MONGOSTRING);
const schema = new Fields.ObjectField({
    difficulty: new Fields.StringField(),
    items: new Fields.ArrayField(new Fields.StringField()),
    balance: new Fields.NumberField()
});

mongo.connect()
    .then(() => {
        console.log(`MongoDB `.green + "[ Connected to the database! ]");
    });


let errors = [];
const modules = fs.readdirSync("commands").filter((file) => fs.statSync(path.join("commands", file)).isDirectory());
modules.forEach((module) => {
    console.log(`Loading:`.green + ` [ ${module} ]`);
    const CMDFiles = fs.readdirSync(path.resolve(`commands/${module}`)).filter((file) => !fs.statSync(path.resolve("commands", module, file)).isDirectory()).filter((file) => {return file.endsWith(".js");});
});


//============================================================================================================================================================================================================

//=========================================================================================MENTION SETTINGS===========================================================================================
client.on("ready", async () => {
    // require('statcord.js').ShardingClient.post(client)

    setInterval(() => {
        const rnd = Math.floor(Math.random() * 2);
        switch (rnd) {
            case 1: {
                client.user.setActivity(`${process.env.prefix}help | Truth or Dare`, {
                    type: "PLAYING",
                });
            }
                break;
            default: {
                client.user.setActivity(`t;help | I don't know what to put here.`, {
                    type: "WATCHING",
                });
            }

                break;
        }
    }, 6500);

    /* --------------------------------------- SLASH COMMANDS --------------------------------------- */

    client.shard.broadcastEval((bot) => bot.guilds.cache.size).then((res) => {
        console.log(`Info: `.grey + `[` + ` ${res.reduce((prev, val) => prev + val, 0).toLocaleString()}`.green + ` servers, ` + `${client.options.shardCount.toLocaleString()}`.green + ` shard(s) ]\n`);
    });

});

//===================================Statcord random shit ========================================================================================================================================================================

client.snipe = new Map();

client.on("messageDelete", async (message, channel) => {
    if (!message.guild) return;
    client.snipe.set(message.channel.id, {
        msg: message.content,
        user: message.author,
        avatar: message.author.displayAvatarURL({dynamic: true}),
        image: message.attachments.first() ? message.attachments.first().proxyURL : null,
        date: message.createdTimestamp,
    });
});

client.login(process.env.token);

//=================================================================================================================================
