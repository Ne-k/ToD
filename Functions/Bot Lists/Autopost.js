const fetch = require("node-fetch");
const BOATS = require("boats.js");
const Topgg = require("@top-gg/sdk");
module.exports = async (bot) => {


const promises = [
    await bot.shard.fetchClientValues("guilds.cache.size"),
    await bot.shard.broadcastEval((bot) => bot.guilds.cache.size),
];
return Promise.all(promises).then((results) => {
    const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);


    const Boats = new BOATS("2NFEeaWliuz7JFTjl1nELbQWxoDMgO3FbuJtcAiPFwYZEUmziciJY9ycj1Uek1x8DVA2ZaDyTamQzzMwKCpvfAkkSGIcNtjJ9BNqmSkjBPF5im07gzCd4jak4zCepd7umcKp1FWjU6pemcfbBmMcok0Nspx");
    Boats.postStats(totalGuilds, "752306970467237970").then(() => {
            console.log("Dboats: ".blue + "[ Successfully updated server count. ]");
        }).catch((err) => {
            return console.log(`Dboats Error `.red + `${err}`);
        });

    Boats.getBot("752306970467237970")
        .then((bot) => {
        }).catch((err) => {
            console.log(`Dboats Error `.red + `${err}`);
        });

    //=============================TOP.GG==================================================================================================================================



    const api = new Topgg.Api(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MjMwNjk3MDQ2NzIzNzk3MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA1MDY2NzUzfQ.TpGhII-9wHjglilYMega0jtcfzRUIBS9SloKEfJ5-sA"
    );

    setInterval(() => {
        api.postStats({
            serverCount: totalGuilds,
            shardcount: bot.options.shardCount,
        });
        return console.log("Top.gg: ".blue + `[ Top.gg stats have been posted. ]`);
    }, 1.2e+6); // post every 30 minutes
    //===============================================================================================================================================================


    fetch(`https://api.discordservices.net/bot/752306970467237970/stats`, {
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
                return console.log("Discordservices: ".blue + `[ Successfully updated server count. ]`);
            } else {
                return console.log(`Discordservices Error `.red + `${res.status}`);
            }
        }).catch((err) => {
            return console.log(`Discordservices Error `.red + `${err}`);
        });
});




}