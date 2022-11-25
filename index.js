const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
require("@colors/colors")
const mongoose = require('mongoose');
require('dotenv').config();
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction] 
});

const fs = require('fs');
require('dotenv').config()

client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.prefix = process.env.PREFIX;
client.tod = require('./ToD.json')

module.exports = client;

mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
	console.log("[ Database ] ".green + 'Connected to MongoDB')
}).catch((err) => {
	console.log("[ Database ] ".red + 'Failed to connect to MongoDB')
})

fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});




client.login(process.env.TOKEN)
