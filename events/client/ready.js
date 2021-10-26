require("colors");
require("dotenv").config();
const moment = require("moment");
module.exports = async (bot) => {
  process.on("unhandledRejection", (error) => {
    return;
  });

  bot.shard.broadcastEval((client) => client.user.setStatus("online"));

  const { MessageEmbed, WebhookClient } = require("discord.js");

  const webhookClient = new WebhookClient({
    id: process.env.CLIENT_LOGGING_ID,
    token: process.env.CLIENT_LOGGING_WEBHOOK,
  });
  webhookClient.send({
    username: "Status",
    avatarURL: bot.user.avatarURL(),
    embeds: [
      new MessageEmbed()
        .setColor("GREEN")
        .setDescription(
          `[ CONNECTION ESTABLISHED ] - Shard #${bot.shardId} has successfully connected.`
        )
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

  const Discord = require("discord.js");

  //============================= Autoposting shit ===========================================

  //====================================DISCORD.BOATS===========================================================================================================================

  const promises = [
    bot.shard.fetchClientValues("guilds.cache.size"),
    bot.shard.broadcastEval((bot) => bot.guilds.cache.size),
  ];
  return Promise.all(promises).then((results) => {
    const totalGuilds = results[0].reduce(
      (acc, guildCount) => acc + guildCount,
      0
    );

    const fetch = require("node-fetch");
    const BOATS = require("boats.js");
    const Boats = new BOATS(
      "2NFEeaWliuz7JFTjl1nELbQWxoDMgO3FbuJtcAiPFwYZEUmziciJY9ycj1Uek1x8DVA2ZaDyTamQzzMwKCpvfAkkSGIcNtjJ9BNqmSkjBPF5im07gzCd4jak4zCepd7umcKp1FWjU6pemcfbBmMcok0Nspx"
    );
    Boats.postStats(totalGuilds, "752306970467237970")
      .then(() => {
        console.log("Dboats: ".blue + "[ Successfully updated server count. ]");
      })
      .catch((err) => {
        return console.log(`Dboats Error `.red + `${err}`);
      });

    Boats.getBot("752306970467237970")
      .then((bot) => {})
      .catch((err) => {
        console.log(`Dboats Error `.red + `${err}`);
      });
    //===============================================================================================================================================================
    //=============================TOP.GG==================================================================================================================================

    const Topgg = require("@top-gg/sdk");

    const api = new Topgg.Api(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MjMwNjk3MDQ2NzIzNzk3MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1MDY2NzUzfQ.TpGhII-9wHjglilYMega0jtcfzRUIBS9SloKEfJ5-sA"
    );

    setInterval(() => {
      api.postStats({
        serverCount: totalGuilds,
        shardcount: bot.options.shardCount,
      });
      return console.log(
        "Top.gg: ".blue + `[ Top.gg stats have been posted. ]`
      );
    }, 1800000); // post every 30 minutes
    //===============================================================================================================================================================

    //===============================VOID BOT LIST================================================================================================================================
  });
};
