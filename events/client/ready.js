require("colors");
require("dotenv").config();
let autoPost = require('../../modules/Bot Lists/Autopost')
const moment = require("moment");
const {WebhookClient, MessageEmbed} = require("discord.js");

module.exports = async (bot) => {

    setTimeout(async () => await bot.shard.broadcastEval((client) => client.user.setStatus("online")), 10000);
    process.on('unhandledRejection', (error) => {
        return;
    })
    const {MessageEmbed, WebhookClient} = require("discord.js");

setTimeout(async () => {
    await bot.shard.broadcastEval((client) => client.user.setAvatar(require('../../avatars.json').avatars[Math.floor(Math.random() * require('../../avatars.json').avatars.length)]));
    const unix = Math.floor(new Date().getTime() / 1000);
    const avatarWeb = new WebhookClient({url: 'https://discord.com/api/webhooks/915760938265772042/L30PHscoPfIzuh3unaR7hcIQZ8Y1oosaGRIRfdRFKtt1qtOwmS3w8DBgQN3dEwWmAXdX'});
    await avatarWeb.send({
        username: 'Avatar changed',
        avatarURL: bot.user.avatarURL(),
        embeds: [
            new MessageEmbed()
                .setColor("GREEN")
                .setThumbnail(require('../../avatars.json').avatars[Math.floor(Math.random() * require('../../avatars.json').avatars.length)])
                .setDescription(`<:horny:824333397170192424> My avatar has been changed (<t:${unix}:R>)`)
        ],
    });
}, 3.6e+6)

    const webhookClient = new WebhookClient({
        id: process.env.CLIENT_LOGGING_ID,
        token: process.env.CLIENT_LOGGING_WEBHOOK,
    });
    await webhookClient.send({
        username: "Status",
        avatarURL: bot.user.avatarURL(),
        embeds: [
            new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`[ CONNECTION ESTABLISHED ] - Shard #${bot.shardId} has successfully connected.`)
                .setTimestamp()
                .setFooter(moment(Date.now()).format("LLL")),
        ],
    });

    console.log(`
    
  ████████╗░█████╗░██████╗░
  ╚══██╔══╝██╔══██╗██╔══██╗
  ░░░██║░░░██║░░██║██║░░██║
  ░░░██║░░░██║░░██║██║░░██║
  ░░░██║░░░╚█████╔╝██████╔╝
  ░░░╚═╝░░░░╚════╝░╚═════╝░
Signed into ${bot.user.tag}
===============================================
`);

    //==========================================================

    //====================================================================

    /*
      setInterval(() => {
        var rnd = Math.floor(Math.random() * 2);
        switch (rnd) {
          case 1:
            {
              bot.user.setActivity(`t;help | connected to ${bot.options.shardCount} shards`, {
                type: 'WATCHING'
              });
            }
            break
            default:
              {
                bot.user.setActivity(`t;help | Truth Or Dare`, {
                  type: 'PLAYING'
                });
              }

              break
        }
      }, 6500)
      */
    //=================================== GUILD ADD/REMOVE =============================================



    //============================= Autoposting shit ===========================================

    //====================================DISCORD.BOATS===========================================================================================================================
return await autoPost(bot)

};
