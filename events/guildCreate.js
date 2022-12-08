const client = require("../index");
const {EmbedBuilder, WebhookClient} = require("discord.js");
const Schema = require("../Database/guildConfigSchema");
require('dotenv').config();
const webhook = new WebhookClient({ url: process.env.SUGGESTION_WEBHOOK_URL });


client.on("guildCreate", async (guild) => {
    console.log(`[ Guild ] `.green + `Joined a new guild: ${guild.name} (${guild.id}) with ${guild.memberCount} members`)
    await webhook.send({
        username: "New Guild!",
        embeds: [
            new EmbedBuilder()
                .setTitle("New Guild!")
                .setDescription(`Guild Name: \`${guild.name}\`\nGuild ID: \`${guild.id}\`\nMember Count: \`${guild.memberCount}\`\n\nJoined at: <t:${Math.floor(Date.now() / 1000)}:R>`)
                .setColor("Green")
                .setThumbnail(guild.iconURL())
        ]
    })
    Schema.findOne({id: guild.id}, async (err, data) => {
        if(err) console.log(err)
        if(!data) {
            const newData = new Schema({
                guildID: guild.id,
                guildName: guild.name,
                config: {
                    nsfwToggle: false,
                }
            })
            await newData.save()
        }
    })

})