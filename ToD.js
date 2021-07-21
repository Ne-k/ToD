//====================================================================================CONSTANTS REQUIRED ON READY=============================================================================================
const { Client, Collection, MessageEmbed, Intents } = require('discord.js'); const Discord = require('discord.js'); const client = new Client({ disableMentions: 'everyone', intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); const fs = require("fs"); const db = require('quick.db'); const chalk = require('chalk');const path = require('path');require("dotenv").config();
//============================================================================================================================================================================================================
client.db = db

client.tod = require('./ToD.json')
client.messageembed = MessageEmbed
client.database = require("./Database/sql.js");
client.default = require('./DefaultConfig.json')
client.logger = require('./modules/logger')
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
const config = require('./DefaultConfig.json')
client.on('messageCreate', async message => {

  let prefix;
  try {
      let fetched = await db.fetch(`prefix_${message.guild.id}`);
      if (fetched == null) {
          prefix = client.default.prefix
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
            msg.delete({ timeout: 5000 })
          })
          }
          
    } catch (err) {
        return message.channel.send(err)
    };
    
   
});


//===================================Statcord random shit ========================================================================================================================================================================

client.snipe = new Map()


client.on("messageDelete", async(message,channel) => {



    if(message.author.bot) return;
    if(!message.guild) return;
    client.snipe.set(message.channel.id, {
        msg:message.content,
        user:message.author.tag,
        profilephoto:message.author.displayAvatarURL(),
        image:message.attachments.first() ? message.attachments.first().proxyURL : null,
        date:message.createdTimestamp,
    })  
    })
    const Statcord = require("statcord.js");
   
    
  
//=================================================================================================================================

client.login(process.env.Token);


















