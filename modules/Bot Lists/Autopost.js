const fetch = require("node-fetch");
const BOATS = require("boats.js");
const Topgg = require("@top-gg/sdk");
const {WebhookClient, MessageEmbed} = require("discord.js");
module.exports = async (bot) => {


const promises = [
    await bot.shard.fetchClientValues("guilds.cache.size"),
    await bot.shard.broadcastEval((bot) => bot.guilds.cache.size),
];
return Promise.all(promises).then(async (results) => {
    const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

    /* Discord.Boats */
    const Boats = new BOATS("2NFEeaWliuz7JFTjl1nELbQWxoDMgO3FbuJtcAiPFwYZEUmziciJY9ycj1Uek1x8DVA2ZaDyTamQzzMwKCpvfAkkSGIcNtjJ9BNqmSkjBPF5im07gzCd4jak4zCepd7umcKp1FWjU6pemcfbBmMcok0Nspx");
    setInterval(async () => {
        Boats.postStats(totalGuilds, "752306970467237970").then(() => {
            console.log("Dboats: ".blue + "[ Successfully updated server count. ]");
        }).catch((err) => {
            return console.log(`Dboats Error `.red + `${err}`);
        });


        /* Top.GG */
        const api = new Topgg.Api(
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MjMwNjk3MDQ2NzIzNzk3MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1MDY2NzUzfQ.TpGhII-9wHjglilYMega0jtcfzRUIBS9SloKEfJ5-sA"
        );
        await api.postStats({
            serverCount: totalGuilds,
            shardcount: bot.options.shardCount,
        });
        console.log("Top.gg: ".blue + `[ Top.gg stats have been posted. ]`);

        //===============================================================================================================================================================

        /* Discord Services */
        await fetch(`https://api.discordservices.net/bot/752306970467237970/stats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "DSEtFJnKPGw6AowoeeEP0XloeENPoQwXax91gzgbCbsAOjPx3A8q",
            },
            body: JSON.stringify({
                servers: totalGuilds,
                shards: bot.options.shardCount,
            }),
        }).then((res) => {
            if (res.status === 200) {
                return console.log("Discord Services: ".blue + `[ Successfully updated server count. ]`);
            } else {
                return console.log(`Discord Services Error `.red + `${res.status}`);
            }
        }).catch((err) => {
            return console.log(`Discord Services Error `.red + `${err}`);
        });

        /* Bots.gg */
        await fetch(`https://discord.bots.gg/api/v1/bots/752306970467237970/stats`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGkiOnRydWUsImlkIjoiNzUwNTEwMTU5Mjg5MjU0MDA4IiwiaWF0IjoxNjM3MDI3NTQ0fQ.8xWCwWXPkmJiEN5r_Q2BqHB69zO7RunYrQ4NQtdjc88",
            },
            body: JSON.stringify({
                guildCount: totalGuilds,
                shardCount: bot.options.shardCount,
            }),
        }).then((res) => {
            if (res.status === 200) {
                return console.log("Discord.Bots.gg: ".blue + `[ Successfully updated server count. ]`);
            } else {
                return console.log(`Discord.Bots.gg Error `.red + `${res.status}`);
            }
        }).catch((err) => {
            return console.log(`Discord.Bots.gg Error `.red + `${err}`);
        });

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
         await bot.user.setAvatar(require('../../avatars.json').avatars[Math.floor(Math.random() * require('../../avatars.json').avatars.length)])
    }, 3.6e+6);


});




}