const moment = require("moment");
const Discord = require("discord.js");
const { Collection, MessageEmbed, Permissions } = require("discord.js");
const ms = require("ms");
require('colors')
const superagent = require('superagent'); 
const db = require("quick.db");
const Timeout = new Collection();


module.exports = async (bot, message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  if(message.content && db.fetch(`antiscamEnabled_${message.guild.id}`) == true) {

   

     
        const unix = Math.floor(new Date().getTime() / 1000);
        /*
        const links = await superagent
        .get(`${process.env.scamAPI}`); 
        
        const scam = links.body
        const scamRegex = !!scam.find((word) => {
            if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(message.content);
        })
        */
        let data = await require('node-fetch')("https://anti-fish.bitflow.dev/check", {
          method: "post",
          body: JSON.stringify({ message: message.content}),
          headers: {
              "Content-Type": "application/json",
              "User-Agent": "Anti-phishing (Sasiko#1234 / 148619350700589056)",
          },

      }).then(res => res.json())


        if(data.match || /^((s[tl][era][ear]r{0,1}[amn].{0,2}.*\.)|(affix.*\.)|(cloud(9team|team9).*\.)|(cs-.*\.)|(csgo.*\.)|(discor.*\.)|(epicg.*\.)|(esl[-tpog].*\.)|(navi.*\.)|(natus-vin.*\.)|(pubg(-|\d).*\.)|(roblox.*\.)|(rust-.*\.)|(blox.*\.)|(robux.*\.))\w*$/i.test(message.content)) {
          
          if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;
          setTimeout(() => {
            if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
              message.delete()
            } 
        }, 0);

    if(bot.db.fetch(`mutedRole_${message.guild.id}`)) {
      if(message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) {
      const muterole = bot.db.fetch(`mutedRole_${message.guild.id}`)
      message.member.roles.add(muterole);
      }
    }
        if(message.guild.id == '439866052684283905') {
          return message.channel.send(`<@!702169463595729009>`)
        }
        const embed = new MessageEmbed()
        .setAuthor('❌ Phishing Link Detected')
        .setColor('RED')
        .setThumbnail(message.author.avatarURL({ dynamic: true }))
        .setDescription(`<@${message.author.id}> | ${message.author.tag} (${message.author.id})\n\n\nScam link found <t:${unix}:R>:\n ||${message.content}||`)
        .setFooter('Clicking on the link can expose your IP (location) and entering in any information details like your password or email address, will compromise your account(s).');
        console.log(`Anti-Scam:`.green + ` [ Scam link prevented in ${message.guild.id} ]`)
        return message.channel.send({content: message.author.id, embeds: [embed]});
        
        } else {
return
        }
        // interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)


       
  
  }


  let prefix = process.env.prefix;
  if (!message.content.toLowerCase().startsWith(prefix)) return;

  let cmdExecuted = moment().format("LLL");

  if (message.content.indexOf(prefix) !== 0);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();


 
  try {
    
  

 

  
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    var commandfile =
      bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (commandfile) {
      let timeout = ms("3000");

      if (Timeout.has(`${command.name}${message.author.id}`)) {
        return message.channel
          .send({
            embeds: [
              new MessageEmbed()
                .setDescription(
                  `Hey ` +
                    "(・`ω´・)" +
                    ` Wooks wike you awe on a coowdown fow anyothew **${ms(
                      Timeout.get(`${command.name}${message.author.id}`) -
                        Date.now(),
                      { long: true }
                    )}**, twy again watew >w< <a:GuraNekoWiggle:845453998622638130>`
                )
                .setColor("RANDOM"),
            ],
          })
          .then((message) => {
            setTimeout(() => message.delete(), 7000);
          });
      }
      Timeout.set(`${command.name}${message.author.id}`, Date.now() + timeout);
      setTimeout(() => {
        Timeout.delete(`${command.name}${message.author.id}`);
      }, timeout);

      let commandPing = Date.now() - message.createdTimestamp;
      bot.logger(
        `${message.author.tag}` +
          ` |`.red +
          ` (${message.author.id}) executed the command ` +
          `${commandfile.config.name}`.underline.cyan +
          ` at ${cmdExecuted}.` +
          ` Message Ping: ${commandPing.toLocaleString()}ms`,
        "command"
      );

      // Statcord.ShardingClient.postCommand(cmd, message.author.id, bot);
      commandfile.run(bot, message, args);
    }
  } catch (e) {
    console.log(e);
  }
};
