const client = require("../index");
const Schema = require("../Database/guildConfigSchema");
const {EmbedBuilder, WebhookClient} = require("discord.js");
require('dotenv').config();
const webhook = new WebhookClient({ url: process.env.SUGGESTION_WEBHOOK_URL });

client.on("guildDelete", async (guild) => {

    console.log("[ Guild ] ".red + `Left guild ${guild.name} (${guild.id}) with ${guild.memberCount - 1} members`)
    await webhook.send({
        username: "Guild Left!",
        embeds: [
            new EmbedBuilder()
                .setTitle("Left Guild!")
                .setDescription(`Guild Name: \`${guild.name}\`\nGuild ID: \`${guild.id}\`\nMember Count: \`${guild.memberCount}\`\n\nLeft at: <t:${Math.floor(Date.now() / 1000)}:R>`)
                .setColor("Red")
                .setThumbnail(guild.iconURL())
        ]
    })
    Schema.findOneAndDelete({ guildID: guild.id }, (err, res) => {
        if (err) console.log(err)
        if (res) console.log(`[ Database ] `.magenta + `Deleted guild ${guild.name} (${guild.id}) from database`)
    })

})