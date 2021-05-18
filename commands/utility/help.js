const { MessageEmbed } = require('discord.js')
const fs = require("fs")
const { Menu } = require('discord.js-menu')
const PREFIX = process.env.Prefix
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    example: "1) help\n2) help util\n3) help anime\n4)help",
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = process.env.Prefix
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

try {
    let noperms = new MessageEmbed()
    .setTitle('Permissions error:')
    .setColor('RED')
    .setDescription(`I do not have the permission [ \`MANAGE_MESSAGES\` ] to continue with this command.\nAs an alternative, please select a category to see its available commands. Usage: \`${PREFIX}help <category>\``)
    .addField('__Categories__:', `\`main\`\n\`anime\`\n\`info\`\n\`util\``)
    let hasPerms = message.channel.permissionsFor(message.guild.me).has("MANAGE_MESSAGES") || message.guild.me.permissions.has("MANAGE_MESSAGES")
    if(!args[0]) {
    if(!hasPerms) message.channel.send(noperms)
    }
    if(hasPerms) {

        if(message.content.toLowerCase() === `${prefix}help`){
    let helpMenu = new Menu(message.channel, message.author.id, [
        // Each object in this array is a unique page.
        {
            name: 'main',
            content: new MessageEmbed({
                title: '- Help Menu -',
                color: 'RANDOM',
                footer: {
                    text: `Page 1/5 • ${bot.commands.size} total commands.`,
                    icon_url: bot.user.avatarURL({ size: 32 }),
                },
                description: `Welcome to ToD's help menu, use the reactions below to navigate around the help embeds.\nIf none show up, than I do not have the permission [ \`ADD_REACTIONS\` ]\nAs an alternative, please select a category to see its available commands. Usage: \`${PREFIX}help <category>\``,
                fields: [
                    {
                        name: '__Categories__:',
                        value: "`main`\n`anime`\n`info`\n`util`",
                        incline: true
                    },
              
                ]
            }),
            reactions: {
                '⏪': 'first',
                '◀': 'previous',
                '🗑️': 'delete',
                '▶': 'next',
                '⏩': 'last'
            }
        },
        {
            name: 'second',
            content: new MessageEmbed({
                title: '**__꒰Main Features꒱:__**',
                color: '#cd8381',
                footer: {
                    text: `Page 2/5 • ${bot.commands.size} total commands.`,
                    icon_url: message.author.displayAvatarURL({ size: 32 }),
                },
                description: `__\`${prefix}help <command_name>\` for more information__`,
                fields: [
                    {
                        name: '** **',
                        value: `1) \`truth\`\n2) \`dare\`\n3) \`fact\`\n4) \`topic\`\n5) \`why\`\n6) \`wyr\``,
                        inline: true,
                    },
                ]
            }),
            reactions: {
                '⏪': 'first',
                '◀': 'previous',
                '🗑️': 'delete',
                '▶': 'next',
                '⏩': 'last'
            }
        },
        {
            name: 'third',
            content: new MessageEmbed({
                title: '**__꒰Anime Corner꒱:__**',
                color: '#cd8381',
                footer: {
                    text: `Page 3/5 • ${bot.commands.size} total commands.`,
                    icon_url: message.author.displayAvatarURL({ size: 32 }),
                },
                description: `__\`${prefix}help <command_name>\` for more information__`,
                fields: [
                    {
                        name: '** **',
                        value: `1) \`azurlane\`\n2) \`aniquote\`\n3 \`booru\`\n4) \`foxes\`\n5) \`kitsu\`\n6) \`kitsune\`\n7) \`mangasearch\`\n8) \`megumin\`\n9) \`nagisa\`\n10)\`neko\``,
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                    {
                        name: '** **',
                        value: `11) \`nekopara\`\n12) \`nep\`\n13) \`ram\`\n14) \`random-anime\`\n15) \`rem\`\n16) \`sfwanime\`\n17) \`awallpaper\`\n18) \`shinobu\`\n19) \`waifu\`\n20) \`aniwallpaper\``,
                        inline: true,
                    },
                ]
            }),
            reactions: {
                '⏪': 'first',
                '◀': 'previous',
                '🗑️': 'delete',
                '▶': 'next',
                '⏩': 'last'
            }
        },
       
        {
            name: '4th',
            content: new MessageEmbed({
                title: '**__꒰Utility꒱(6):__**',
                color: 'RANDOM',
                footer: {
                    text: `Page 4/5 • ${bot.commands.size} total commands.`,
                    icon_url: message.author.displayAvatarURL({ size: 32 }),
                },
                description: `__\`${prefix}help <command_name>\` for more information__`,
                fields: [
                    {
                        name: '** **',
                        value: `1) \`ascii\`\n2) \`avatar\`\n3) \`help\`\n4) \`prefix\`\n5) \`snipe\`\n6)\`userinfo\``,
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                ]
            }),
            reactions: {
                '⏪': 'first',
                '◀': 'previous',
                '🗑️': 'delete',
                '▶': 'next',
                '⏩': 'last'
            }
        },
        {
            name: '6th',
            content: new MessageEmbed({
                title: '**__꒰Bot Information꒱(9):__**',
                color: 'RANDOM',
                footer: {
                    text: `Page 5/5 • ${bot.commands.size} total commands.`,
                    icon_url: message.author.displayAvatarURL({ size: 32 }),
                },
                description:`__\`${prefix}help <command_name>\` for more information__`,
                fields: [
                    {
                        name: '** **',
                        value: `1) \`botinfo\`\n2) \`bugreport\`\n3) \`hex\`\n4) \`invite\`\n5) \`affiliates\`\n6) \`ping\`\n7) \`policy\`\n8) \`suggest\`\n9) \`uptime\`\n10) \`vbvoted\``,
                        inline: true,
                    },
                    {
                        name: '\u200b',
                        value: '\u200b',
                        inline: true,
                    },
                ]
            }),
            reactions: {
                '⏪': 'first',
                '◀': 'previous',
                '🗑️': 'delete',
                '▶': 'next',
                '⏩': 'last'
            }
        },

        // The last parameter is the number of milliseconds you want the menu to collect reactions for each page before it stops to save resources
        // The timer is reset when a user interacts with the menu.
        // This is optional, and defaults to 180000 (3 minutes).
    ], 300000)
    // Run Menu.start() when you're ready to send the menu in chat.
    // Once sent, the menu will automatically handle everything else.
    helpMenu.start()
}

}
if(args[0].toLowerCase() === "anime") {

    let embed = new MessageEmbed()
        .setTitle('**[ ANIME CORNER ]**')
        .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
        .setColor("#7975a8") // Set the color
        .addField(`** **`,`1) \`azurlane\`\n2) \`aniquote\`\n3 \`booru\`\n4) \`foxes\`\n5) \`kitsu\`\n6) \`kitsune\`\n7) \`mangasearch\`\n8) \`megumin\`\n9) \`nagisa\`\n10)\`neko\``, true)
        .addField('** **', `11) \`nekopara\`\n12) \`nep\`\n13) \`ram\`\n14) \`random-anime\`\n15) \`rem\`\n16) \`sfwanime\`\n17) \`awallpaper\`\n18) \`shinobu\`\n19) \`waifu\`\n20) \`aniwallpaper\``, true)
return message.channel.send(embed)
}


else if(args[0].toLowerCase() === "util") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ UTILITY ]**')
    .setColor("#cbbdd7") // Set the color
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
    .addField('** **', `1) \`ascii\`\n2) \`avatar\`\n3) \`help\`\n4) \`prefix\`\n5) \`serverinfo\`\n6) \`snipe\`\n7)\`userinfo\``)
    return message.channel.send(embed1)
}

else if(args[0].toLowerCase() === "info") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ INFORMATION ]**')
    .setColor("#815498") // Set the color
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`,)
    .addField('** **', `1) \`botinfo\`\n2) \`bugreport\`\n3) \`hex\`\n4) \`invite\`\n5) \`affiliates\`\n6) \`ping\`\n7) \`policy\`\n8) \`suggest\`\n9) \`uptime\`\n10) \`voted\``)
    return message.channel.send(embed1)
}
else if(args[0].toLowerCase() === "main") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ MAIN ]**')
    .setColor("#7975a8") // Set the color
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
    .addField('** **', `1) \`truth\`\n2) \`dare\`\n3) \`fact\`\n4) \`topic\`\n5) \`why\`\n6) \`wyr\``)
    return message.channel.send(embed1)
}
else if(args[0].toLowerCase() === "owner") {
    var embed1 = new MessageEmbed()
    .setTitle('**[ owner ]**')
    .setColor("RANDOM") // Set the color
    .setDescription(`__\`${prefix}help <command_name>\` for more information__`)
    .addField('** **', `1) \`avatarreset\`\n2) \`eval\`\n3) \`exec\`\n4) \`reboot\`\n5) \`shutdown\``)
    return message.channel.send(embed1)
}
else {
    const embed = new MessageEmbed()
    .setColor("#d9d9d9")
    .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
    .setThumbnail(bot.user.displayAvatarURL())
    let CC = ["#815498", "#f1cdc8", "#eaecf3", "#dcadae", "#cbbdd7", "#a7a2d0"];
    let result = Math.floor((Math.random() * CC.length));
    let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
    if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
    command = command.config

    let SHembed = new MessageEmbed()
            .setColor(CC[result])
            .setAuthor(`ToD Command Help Panel:`, bot.user.avatarURL())
            .setThumbnail(bot.user.avatarURL())
            .setDescription(`\n\n**Command:** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\n**Description:** \`${command.description || "No Description provided."}\`\n**Usage:** \`${command.usage ? `\`${command.usage}\`` : "No Usage"}\`\n**Examples:** \`${command.example ? `\`${command.example}\`` : "No Examples Found"}\`\n**Aliases:** \`${command.aliases ? command.aliases.join(" , ") : "None."}\``)
            .setFooter(message.guild.name, message.guild.iconURL())
return message.channel.send(SHembed)
    
}
}catch (err) {
    console.log(err)
}
    

}

}