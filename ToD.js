//====================================================================================CONSTANTS REQUIRED ON READY=============================================================================================
const { Client, Collection, MessageEmbed, Intents } = require('discord.js'); const Discord = require('discord.js'); const client = new Client({ disableMentions: 'everyone', intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); const fs = require("fs"); const db = require('quick.db');const path = require('path');require("dotenv").config();
//============================================================================================================================================================================================================
const moment = require('moment')
const mongoose = require('mongoose')
client.db = db
client.slash = new Collection()
client.tod = require('./ToD.json')
client.messageembed = MessageEmbed
client.logger = require('./modules/logger')
//====================================================================================COLLECTIONS REQUIRED ON READY===========================================================================================
client.aliases = new Collection();


//============================================================================================================================================================================================================


//============================================================================================INITIALIZING====================================================================================================
["aliases", "commands"].forEach(x => client[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(client))

client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

mongoose.connect(process.env.MONGOSTRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.once("connected", () => {
	console.log(`MongoDb: `.green + "[ Connected to Database ]");
  
});


let errors = [];
const modules = fs.readdirSync("commands").filter((file) => fs.statSync(path.join("commands", file)).isDirectory());
modules.forEach((module) => {
		
	console.log(`Loading:`.green + ` [ ${module} ]`);
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

  // require('statcord.js').ShardingClient.post(client)

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
                client.user.setActivity(`t;help | Slash Commands`, {
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
const cFiles = fs.readdirSync('./slash/').filter(file => file.endsWith('.js'));
for (const file of cFiles) {
    const command = require(`./slash/${file}`);

    if (command.global == true) {
            client.api.applications(client.user.id).commands.post({
                data: {
                    name: command.slash.name,
                    description: command.slash.description,
                    options: command.slashcommandOptions,
                }
            })
            console.log(`Posting: `.yellow + `[ ${command.slash.name} from ${file} (${command.global ? "global" : "guild"}) ]`)
        
        client.slash.set(command.slash.name, command);
    }
}
let cmdArrGlobal = await client.api.applications(client.user.id).commands.get()
cmdArrGlobal.forEach(element => {
    console.log(`Successfully Loaded: `.green + `[ ${element.name} (${element.id}) ]`)
});
});

client.ws.on('INTERACTION_CREATE', async interaction => {
  
if (!client.slash.has(interaction.data.name)) return;
try {
    client.on('interactionCreate', async(int) => {
        client.slash.get(interaction.data.name).execute(interaction, int);
    })
} catch (error) {
    console.log(`Error Occured => ${interaction.data.name} : ${error.message}`)
    console.log(error.stack)
    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: {
                content: `Sorry, there was an error executing that command!`
            }
        }
    })
}
})

client.on('messageCreate', async message => {

  let prefix = process.env.prefix
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
    
    client.login(process.env.Token);

     
//=================================================================================================================================