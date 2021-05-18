//====================================================================================CONSTANTS REQUIRED ON READY=============================================================================================
const { Client, Collection } = require('discord.js');
const Discord = require('discord.js')
const client = new Client({ disableMentions: 'everyone' });
const fs = require("fs");
const db = require('quick.db');
const chalk = require('chalk')

const path = require('path')
//============================================================================================================================================================================================================

require("dotenv").config();
client.db = db
//====================================================================================COLLECTIONS REQUIRED ON READY===========================================================================================
client.commands = new Collection();
client.aliases = new Collection();

//============================================================================================================================================================================================================



//============================================================================================INITIALIZING====================================================================================================
["aliases", "commands"].forEach(x => client[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(client));

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});


let errors = [];
const modules = fs.readdirSync("commands").filter((file) => fs.statSync(path.join("commands", file)).isDirectory());
modules.forEach((module) => {
		
	console.log(chalk.underline.green(`L͟o͟a͟d͟i͟n͟g͟ M͟o͟d͟u͟l͟e͟:` + chalk.yellowBright` ${module}`));
	const CMDFiles = fs
		.readdirSync(path.resolve(`commands/${module}`))
		.filter((file) => !fs.statSync(path.resolve("commands", module, file)).isDirectory())
		.filter((file) => {
			return file.endsWith(".js");
		
        });
    })



//============================================================================================================================================================================================================


//=========================================================================================MENTION SETTINGS===========================================================================================
const config = require('./config_prefix')
client.on('message', async message => {

  let prefix;
  try {
      let fetched = await db.fetch(`prefix_${message.guild.id}`);
      if (fetched == null) {
          prefix = config.PREFIX
      } else {
          prefix = fetched
          
      }
  
      } catch (e) {
      console.log(e)
};
try {
        if (message.mentions.has(client.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
          let pingembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ size: 32 }))
      .setDescription(`__Server Prefix__: \`${prefix}\`\n\nType \`${prefix}help\` to see a list of all the available commands.`)
      .setColor('#2f3136')
          return message.channel.send(pingembed)
          .then(msg => {
            msg.delete({ timeout: 10200 })
          })
          }
          
    } catch (err) {
        return message.channel.send(err)
    };
    client.snipe = new Map()
    
    if(message.author.bot) return;
    if(!message.guild) return;
    client.snipe.set(message.channel.id, {
        msg:message.content,
        user:message.author.tag,
        profilephoto:message.author.displayAvatarURL(),
        image:message.attachments.first() ? message.attachments.first().proxyURL : null,
        date:message.createdTimestamp,
    })  
    
});


//===================================Statcord random shit ========================================================================================================================================================================








    

//=================================================================================================================================

client.login(process.env.Token);