require("colors");
require("dotenv").config();
let autoPost = require('../../modules/Bot Lists/Autopost')
const moment = require("moment");
const {WebhookClient, MessageEmbed} = require("discord.js");

module.exports = async (bot) => {
    const unix = Math.floor(new Date().getTime() / 1000);
    setTimeout(async () => await bot.shard.broadcastEval((client) => client.user.setStatus("online")), 60000);
    process.on('unhandledRejection', (error) => {
        return;
    })
    const {MessageEmbed, WebhookClient} = require("discord.js");
    let avatarArray = ["https://images-ext-1.discordapp.net/external/Y2KOMB4-9Vh6z8kOrXH7_L8kkNDwX_Myu5B-zMO_YbI/%3Fsize%3D512/https/cdn.discordapp.com/avatars/752306970467237970/569840b87cd50c272feef888252e712b.png","https://media.discordapp.net/attachments/803117501218160651/915756163704971264/unknown.png", "https://media.discordapp.net/attachments/803117501218160651/915756214258917396/unknown.png?width=552&height=636", "https://media.discordapp.net/attachments/803117501218160651/915756227085090836/unknown.png", "https://media.discordapp.net/attachments/803117501218160651/915756278582747147/unknown.png?width=636&height=636", "https://media.discordapp.net/attachments/803117501218160651/915756356131254272/unknown.png?width=636&height=636", "https://media.discordapp.net/attachments/803117501218160651/915756426243239946/unknown.png", "https://media.discordapp.net/attachments/803117501218160651/915757119855263744/unknown.png?width=642&height=636", "https://media.discordapp.net/attachments/803117501218160651/915757366518104144/unknown.png"]
    const randomElement = avatarArray[Math.floor(Math.random() * avatarArray.length)];
    setTimeout(async () => {
        const avatarWeb = new WebhookClient({ url: 'https://discord.com/api/webhooks/915760938265772042/L30PHscoPfIzuh3unaR7hcIQZ8Y1oosaGRIRfdRFKtt1qtOwmS3w8DBgQN3dEwWmAXdX' });
        await avatarWeb.send({
            username: 'Avatar changed',
            avatarURL: randomElement,
            embeds: [
                new MessageEmbed()
                    .setColor("GREEN")
                    .setThumbnail(randomElement)
                    .setDescription(`<:horny:824333397170192424> My avatar has been changed (<t:${unix}:R>)`)
            ],
        });
        await bot.user.setAvatar(randomElement)
    }, 1000);

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
await autoPost(bot)

};
