const Discord = require("discord.js")
module.exports = {
    config: {
        name: "avatar",
        usage: "t;avatar <@user>",
        aliases: ["av"],
        description: "Shows a user's avatar, along with download links.",
       example: "avatar Nek"
    },
    run: async (bot, message, args) => {
    

        try {
  
            let user =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]) ||
            message.guild.members.cache.find(m =>
              [m.user.username, m.displayName, m.user.tag].some(
                e => e.toLowerCase() === args.join(" ").toLowerCase()
              )
            ) ||
            message.member;


if(!user.user.avatarURL()) return message.reply(`:x: ${user.user.tag} profile photo not found.`)
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`[PNG](${user.user.avatarURL({format: "png"})}) **|** [JPG](${user.user.avatarURL({format: "jpg"})}) **|** [WEBP](${user.user.avatarURL({format: "webp"})}) **|** [GIF](${user.user.avatarURL({dynamic: true, format: "gif"})})`)
.setImage(user.user.avatarURL({dynamic: true})+"?size=2048") //Size :D
.setTimestamp()
.setAuthor(user.user.tag,user.user.avatarURL())

message.channel.send(embed)
} catch(e) {
    message.channel.send(`1 ...An error occurred...: \`${e.message}\``);
}
}
}