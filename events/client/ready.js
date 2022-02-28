require("colors");
require("dotenv").config();
let autoPost = require('../../modules/Bot Lists/Autopost')
const moment = require("moment");
const {WebhookClient, MessageEmbed} = require("discord.js");

module.exports = async (bot) => {
    /*
    await bot.shard.broadcastEval(client => {
        setInterval(() => {
            const rnd = Math.floor(Math.random() * 2);
            switch (rnd) {
                case 1:
                {
                    client.user.setActivity(`ToD will maybe be deleted...`, {
                        type: 'WATCHING'
                    });
                }
                    break
                default:
                {
                    client.user.setActivity(`Join the support server for information`, {
                        type: 'WATCHING'
                    });
                }

                    break
            }
        }, 5000)
    })
     */

    setTimeout(async () => await bot.shard.broadcastEval((client) => client.user.setStatus("online")), 10000);

    process.on('unhandledRejection', (error) => {
        return;
    })
    const {MessageEmbed, WebhookClient} = require("discord.js");



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



return await autoPost(bot)

};
