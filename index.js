const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
require("@colors/colors")
const mongoose = require('mongoose');
require('dotenv').config();
const Schema = require("./Database/guildConfigSchema");
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

client.on('guildCreate', async (guild) => {
	Schema.findOne({id: guild.id}, async (err, data) => {
		if(err) console.log(err)
		if(!data) {
			const newData = new Schema({
				guildID: guild.id,
				guildName: guild.name,
				config: {
					nsfwToggle: false,
				}
			})
			await newData.save()
		}
	})
})

client.on('guildDelete', async (guild) => {
	Schema.findOneAndDelete({ id: guild.id }, (err, res) => {
		if (err) console.log(err)
	})
})


client.login(process.env.TOKEN)
