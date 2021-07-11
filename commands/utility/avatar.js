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
.setDescription(`__**Image Files**__: [PNG](${user.user.avatarURL({format: "png"})}) **|** [JPG](${user.user.avatarURL({format: "jpg"})}) **|** [WEBP](${user.user.avatarURL({format: "webp"})}) **|** [GIF](${user.user.avatarURL({dynamic: true, format: "gif"})})\n__**Image Sizes**__: [16](${user.user.avatarURL({dynamic: true, size: 16})}) **|** [32](${user.user.avatarURL({dynamic: true, size: 32})}) **|** [64](${user.user.avatarURL({dynamic: true, size: 64})}) **|** [128](${user.user.avatarURL({dynmaic: true, size: 128})}) **|** [512](${user.user.avatarURL({dynamic: true, size: 1024})}) **|** [2038](${user.user.avatarURL({dynamic: true, size: 2048})}) **|** [4096](${user.user.avatarURL({dynamic: true, size: 4096})})`)
.setImage(user.user.avatarURL({dynamic: true})+"?size=2048") 
.setTimestamp()
.setAuthor(user.user.tag,user.user.avatarURL())

message.channel.send({embed: embed})
} catch(e) {
    message.channel.send({content: `1 ...An error occurred...: \`${e.message}\``});
}
}
}