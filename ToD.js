//====================================================================================CONSTANTS REQUIRED ON READY=============================================================================================
const { Client, Collection, MessageEmbed, Intents } = require('discord.js'); const Discord = require('discord.js'); const client = new Client({ disableMentions: 'everyone', intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); const fs = require("fs"); const db = require('quick.db'); const chalk = require('chalk');const path = require('path');require("dotenv").config();
//============================================================================================================================================================================================================
const moment = require('moment')

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
client.on('ready', async () => {
    setInterval(() => {
        var rnd = Math.floor(Math.random() * 2);
        switch (rnd) {
          case 1:
            {
              client.user.setActivity(`t;help | Truth or Dare`, {
                type: 'PLAYING'
              });
            }
            break
            default:
              {
                client.user.setActivity(`t;help | Custom prefixes have been removed.`, {
                  type: 'WATCHING'
                });
              }
             
              break
        }
      }, 6500)


    

/* --------------------------------------- SLASH COMMANDS --------------------------------------- */



client.shard.broadcastEval(bot => bot.guilds.cache.size).then(res => {
    console.log(`Info: `.grey + `[` + ` ${res.reduce((prev, val) => prev + val, 0).toLocaleString()}`.green + ` servers, ` + `${client.options.shardCount.toLocaleString()}`.green + ` shard(s) ]\n`)
    
  })
    /*
  })
  
  setInterval(() => {
      var rnd = Math.floor(Math.random() * 2);
      switch (rnd) {
        case 1:
          {
            client.user.setActivity(`Slash commands`, {
              type: 'WATCHING'
            });
          }
          break
          default:
            {
              client.user.setActivity(`Truth Or Dare`, {
                type: 'PLAYING'
              });
            }
           
            break
      }
    }, 6500)
*/
// client.user.setActivity('Jahy-sama wa Kujikenai!', {type: 'WATCHING'})
  const commandFiles = fs.readdirSync(`./slash`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
      const command = require(`./slash/${file}`);
      
      
      if (command.global == true) {

        

          client.api.applications(client.user.id).commands.post({ data: {
              name: command.name,
              description: command.description,
              options: command.commandOptions,
              
          }})
      }

      client.shard.broadcastEval(client => client.guilds.cache.size)
      .then(results => {
        // results.reduce((prev, val) => prev + val, 0).toLocaleString()
        client.commands.set(command.name, command);
        console.log(`Posting: `.yellow + `[ ${command.name} from ${file} (${command.global ? "global" : "guild"}) ]`)
      })
  
      
  }
  console.log("")
  
 
  let cmdArrGlobal = await client.api.applications(client.user.id).commands.get()
  cmdArrGlobal.forEach(element => {
      console.log("Successfully Loaded: ".green + `[ ` + element.name + " (" + element.id + ")" + ` ]`)
  });
  console.log("")
});

client.ws.on('INTERACTION_CREATE', async interaction => {
  if (!client.commands.has(interaction.data.name)) return;
  let cmdExecuted = moment().format('LLL')
  client.logger(`${interaction.member.user.username}#${interaction.member.user.discriminator}` + ` |`.red + ` (${interaction.member.user.id}) executed ` + `slash `.red + `command ` + (`${interaction.data.name.toUpperCase()}`.underline.cyan) + ` at ${cmdExecuted}.` , "command")
  try {
    client.on('interactionCreate', async (int) => {
      client.commands.get(interaction.data.name).execute(interaction, int, client);
    })
  } catch (error) {
      console.log(`Error from command ${interaction.data.name} : ${error.message}`);
      console.log(`${error.stack}\n`)
      client.api.interactions(interaction.id, interaction.token).callback.post({data: {
          type: 4,
          data: {
                  content: `Sorry, there was an error executing that command!`
              }
          }
      })
  }


})

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
          return message.channel.send({embeds: [pingembed]}).then(msg => {
            setTimeout(() => msg.delete(), 5000);
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

