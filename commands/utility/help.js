const { MessageEmbed } = require('discord.js')
const fs = require("fs")
const { Menu } = require('discord.js-menu')

const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    aliases: ["h"],
    example: "1) help\n2) help util\n3) help anime\n4)help",
},
run: async (bot, message, args) => {
    
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = bot.default.prefix
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };
try {
    
        if(message.content.toLowerCase() === `${prefix}help`){
            const { getColorFromURL } = require('color-thief-node');


    const dominantColor = await getColorFromURL(message.author.avatarURL({format: 'png'}))
            return message.channel.send({embed: new bot.messageembed().setColor(dominantColor).setAuthor('Help Command Panel:', bot.user.avatarURL({format: 'png'})).setDescription(`<:Pink_Dash:843518578749865994> Run \`${prefix}help <category name>\` for the list of commands in the category.\n\n<:Orange_dash:843518612747976714> **__Categories __**:\n \`all\`, \`roleplay\`, \`anime\`, \`main\`, \`misc\`, \`util\`\n\n \<:Red_dash:843518522209992724> __**Links**__:\n**[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`).setFooter(bot.commands.size + ` total commands.`, message.author.avatarURL({dynamic: true}))})
        }
        if(args[0].toLowerCase() === "all") {
            const { getColorFromURL } = require('color-thief-node');


            const dominantColor1 = await getColorFromURL(message.author.avatarURL({format: 'png'}))

            return message.channel.send({embed: new bot.messageembed().setColor(dominantColor1).setAuthor('Help Command Panel:', bot.user.avatarURL({format: 'png'})).setDescription(`*Execute the command \`${prefix}help <Command_name>\` for more information on the command.\n<:Pink_Dash:843518578749865994> __**Anime Corner**__:\n\`aniquote\`\, \`anisearch\`\, \`azurlane\`\, \`awoo\`\, \`booru\`\, \`foxes\`\, \`kitsune\`\, \`megumin\`\, \`nagisa\`\, \`neko\`, \`nekopara\`\, \`okami\`\, \`nep\`\, \`random-anime\`\, \`rem\`\, \`sfwanime\`\, \`shinobu\`\, \`waifu\`\, \`waifugen\`\n\n<:Orange_dash:843518612747976714> __**Utility**__:\n\`avatar\`\, \`disable\`, \`enable\`, \`help\`\, \`prefix\`\, \`snipe\`\n\n<:Purple_dash:843518550966796309> __**Miscellaneos**__:\n\`botinfo\`\, \`invite\`\, \`ping\`\, \`policy\`\, \`suggest\`\, \`uptime\`\n\n<:Red_dash:843518522209992724> __**Main Features**__:\n\`truth\`\, \`dare\`\, \`fact\`\, \`topic\`\, \`why\`\, \`wyr\`\n\n<:Yellow_dash:843518493000728576> __**Affections / Roleplay**__\n\`bite\`\, \`blush\`\, \`bonk\`\, \`cry\`\, \`cuddle\`\, \`dance\`\, \`feed\`\, \`glomp\`\, \`happy\`\, \`horny\`\, \`hug\`\, \`kiss\`, \`lick\`\, \`nom\`\, \`pat\`\, \`poke\`\, \`pout\`\, \`punch\`\, \`slap\`\, \`smile\`\, \`smug\`\, \`tickle\`\, \`wag\`\, \`stare\`\, \`wave\`\, \`wink\``).setFooter(bot.commands.size + ` total commands.`, message.author.avatarURL({dynamic: true}))})
        }
if(args[0].toLowerCase() === "anime") {

    let embed = new MessageEmbed()
        .setTitle('**[ ANIME CORNER ]**')
        .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
        .setColor("#7975a8") 
        .addField(`** **`,`- \`aniquote\`\n- \`anisearch\`\n- \`azurlane\`\n-  \`awoo\`\n- \`booru\`\n- \`foxes\`\n- \`kitsune\`\n- \`megumin\`\n- \`nagisa\`\n- \`neko\``, true)
        .addField('** **', `- \`nekopara\`\n- \`okami\`\n- \`nep\`\n- \`random-anime\`\n- \`rem\`\n- \`sfwanime\`\n- \`shinobu\`\n- \`waifu\`\n- \`waifugen\``, true)
return message.channel.send(embed)
}


else if(args[0].toLowerCase() === "util") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ UTILITY ]**')
    .setColor("#cbbdd7") 
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
    .addField('** **', `- \`avatar\`\n- \`disable\`\n- enable\n- \`help\`\n- \`prefix\`\n- \`snipe\``)
    return message.channel.send(embed1)
}

else if(args[0].toLowerCase() === "misc") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ MISCELLANEOUS ]**')
    .setColor("#815498") 
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`,)
    .addField('** **', `- \`botinfo\`\n- \`invite\`\n- \`ping\`\n- \`policy\`\n- \`suggest\`\n- \`uptime\``)
    return message.channel.send(embed1)
}
else if(args[0].toLowerCase() === "main") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ MAIN ]**')
    .setColor("#7975a8") 
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
    .addField('** **', `- \`truth\`\n- \`dare\`\n- \`fact\`\n- \`topic\`\n- \`why\`\n- \`wyr\``)
    return message.channel.send(embed1)
}
else if(args[0].toLowerCase() === "roleplay") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ AFFECTIONS // ROLEPLAY ]**')
    .setColor("#7975a8") 
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
    .addField('** **', `- \`bite\`\n- \`blush\`\n- \`bonk\`\n- \`cry\`\n- \`cuddle\`\n- \`dance\`\n- \`feed\`\n- \`glomp\`\n- \`happy\`\n- \`horny\`\n- \`hug\`\n-\`kiss\``,true )
    .addField('** **', `- \`lick\`\n- \`nom\`\n- \`pat\`\n- \`poke\`\n- \`pout\`\n- \`punch\`\n- \`slap\`\n- \`smile\`\n- \`smug\`\n- \`tickle\`\n- \`wag\`\n- \`stare\`\n- \`wave\`\n- \`wink\``, true)
    return message.channel.send(embed1)
}
else {
    const embed = new MessageEmbed()
    .setColor("#d9d9d9")
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setThumbnail(bot.user.displayAvatarURL())
    let CC = ["#815498", "#f1cdc8", "#eaecf3", "#dcadae", "#cbbdd7", "#a7a2d0"];
    if(!message.content.startsWith(prefix))  {
        return;
    }
    let result = Math.floor((Math.random() * CC.length));
    let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
    if (!command) {
        message.channel.send({embed: new bot.messageembed().setDescription(`\`${args[0]}\` is not a valid command. Use the command \`${prefix}help\` to see all of the commands.`).setColor('RED')})
    }
    command = command.config
    let SHembed = new MessageEmbed()
            .setColor(CC[result])
            .setAuthor(`ToD Command Help Panel:`, bot.user.avatarURL())
            .setThumbnail(bot.user.avatarURL())
            .setDescription(`\n\n**Command:** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\n**Description:** \`${command.description || "No Description provided."}\`\n**Usage:** \`${command.usage ? `\`${command.usage}\`` : "No Usage"}\`\n**Examples:** \`${command.example ? `\`${command.example}\`` : "No Examples Found"}\`\n**Aliases:** \`${command.aliases ? command.aliases.join(" , ") : "None."}\``)
return message.channel.send(SHembed)
    
}
}catch (err) {
    console.log(err)
}
    

}

}
