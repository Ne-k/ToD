
module.exports = {
    config: {
        name: "partners",
        aliases: ["affiliates", "partner", "aff"],
        usage: "partners",
        description: "Provides information about ToD's partners.",
    
    },
    run: async (bot, message, args) => {

        const { Client, MessageEmbed } = require('discord.js')
        const { Menu } = require('discord.js-menu')


        let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
        
            {
                // A page object consists of a name, used as a destination by reactions...
                name: 'main',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    author: {
                        name: 'ForGetFul',
                        icon_url: 'https://images-ext-1.discordapp.net/external/mu8JQ0BuQxXNpN5Frw3k1GfoM5de_QJna0vxtp6G_3k/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/595966684100034578/b529b5e03813d78924f0d49872d1f24f.webp?width=270&height=270',
                        url: 'https://forgetful.ga',
                    },
                    thumbnail: {
                        url: 'https://images-ext-1.discordapp.net/external/jsm19iLtbXJ9Xx384IySBvAyxZG2JELPdkyM1swbt_o/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/268843733317976066/a_ce75b15d16c95d1825851f8bde48e178.gif?format=gif&width=270&height=270',
                    },
                    color: 'PURPLE',
                    footer: {
                        text: `Page 1/10`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer:**\n[ForGetFulSkyBro#9999](https://discordapp.com/users/268843733317976066)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered Bot:**\n[ForGetFul#4138](https://discord.com/oauth2/authorize?client_id=595966684100034578&scope=bot&permissions=1022487575)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot website__: [Forgetful.ga](https://forgetful.ga)\n__Bot vote page__: [VoidBots.net](https://voidbots.net/bot/forgetful/)\n__Support server__: [forgetful.ga/server]( https://forgetful.ga/server)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "ForGetFul is a rich Multipurpose bot for all use! Currently in 300+ servers and over 220,895+ users. This bot has been in use for 2 years now and still being updated!"
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏪': 'first',
                    '◀': 'previous',
                    '🗑️': 'delete',
                    '▶': 'next',
                    '⏩': 'last'
                }
            },
            {
                // A page object consists of a name, used as a destination by reactions...
                name: 'second',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    author: {
                        name: 'Alfie',
                        icon_url: 'https://images-ext-2.discordapp.net/external/QM238gRqBv2rIolgSO49_Qp3PQW47uPxrSJ4xp7pY40/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/742012512618414140/4d2f182e8a2a0e7bf7c9aad5a1fca3b5.webp?width=300&height=300',
                    },
                    thumbnail: {
                        url: 'https://images-ext-2.discordapp.net/external/XB9VmfaYmZMSa7oroaJhqB4rDU-qmw7l_CKId46ccu4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/322996242521260042/43eed37d68d27dedf18e5dfd36810438.webp',
                    },
                    color: 'PURPLE',
                    footer: {
                        text: `Page 2/10`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer:**\n[MBroken#4688](https://discordapp.com/users/322996242521260042)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered Bot:**\n[Alfie#8351](https://discord.com/oauth2/authorize?client_id=742012512618414140&scope=bot)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot invite__: [Alfie invite](https://discord.com/oauth2/authorize?client_id=742012512618414140&scope=bot)\n__Support server__: [Discord.gg](https://discord.gg/NEJeEcXKTQ)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "Alfie is a multi-purpose Discord Bot with moderation and utility commands for your server"
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏪': 'first',
                    '◀': 'previous',
                    '🗑️': 'delete',
                    '▶': 'next',
                    '⏩': 'last'
                }
            },
           
            {
                // A page object consists of a name, used as a destination by reactions...
                name: '4th',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    author: {
                        name: 'Cassandra',
                        icon_url: 'https://images-ext-1.discordapp.net/external/9f0LvUHSCGNNYFWW6Nl34I2ei4OnQOuRoS5nLeveOMo/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/742030317451214888/b9565e0c0588808b036e816ae99cb9a3.webp?width=450&height=450',
                    },
                    thumbnail: {
                        url: 'https://images-ext-2.discordapp.net/external/BvRAxXv-1V9ejfF0uk1lffKKqMqkECM8xbp4XZeUWec/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/717822288375971900/e939fa4842437505ca30d50d3c1006ca.webp?width=450&height=450',
                    },
                    color: '#6D5E61',
                    footer: {
                        text: `Page 3/10`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer:**\n[Shadi#0879](https://discordapp.com/users/717822288375971900)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered Bot:**\n[Cassandra#9492](https://discord.com/oauth2/authorize?client_id=742030317451214888&permissions=2080767094&scope=bot)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot website__: [cassandra9492.tk](https://cassandra9492.tk/)\n__Bot invite__: [Cassandra invite](https://discord.com/oauth2/authorize?client_id=742030317451214888&permissions=2080767094&scope=bot)\n__Support server__: [Discord.gg](https://discord.gg/xp7y77MXHk)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "Cassandra is a simple made, no set up required, feature packed bot that will be able to help maintain a peaceful community theme and the aesthetic fun feel of any type of server you may add it to!"
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏪': 'first',
                    '◀': 'previous',
                    '🗑️': 'delete',
                    '▶': 'next',
                    '⏩': 'last'
                }
            },
            {
                // A page object consists of a name, used as a destination by reactions...
                name: 'third',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    author: {
                        name: 'Chiaki',
                        icon_url: 'https://images-ext-1.discordapp.net/external/BNJVbRUxINk9zDkAt3m5h385GGvsl43JWWh_nPcfEE4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/814643768938070037/9e6aa0dbe5416f8cd0a19a97dd11d166.webp?width=450&height=450',
                    },
                    thumbnail: {
                        url: 'https://images-ext-2.discordapp.net/external/YtVExHrmGQYDBWd9F2RxJfhDjOWM_b-H7OztlbRUW7k/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/772176688980557846/c06ff9a228744f12983140909382d0c5.webp',
                    },
                    color: '#BEAED8',
                    footer: {
                        text: `Page 4/10`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer:**\n[Palentier#0001](https://discordapp.com/users/772176688980557846)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered Bot:**\n[Chiaki#4688]( https://discord.com/oauth2/authorize?client_id=814643768938070037&scope=bot&permissions=2147352567)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot website__: [chiaki.ga]( https://www.chiaki.ga/index.html)\n__Bot invite__: [Chiaki invite]( https://discord.com/oauth2/authorize?client_id=814643768938070037&scope=bot&permissions=2147352567)\n__Support server__: [Discord.gg](https://discord.gg/rmdBvk6mbc)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "Chiaki is a bot designed to keep your server safe and your staff team organized. Its moderation and utility suite keep track of your members and keep your moderators accountable. Its fun commands capabilities also allow everyone to have fun and enjoy your server thoroughly. Finally, Chiaki is designed to be fast and easy to use."
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏪': 'first',
                    '◀': 'previous',
                    '🗑️': 'delete',
                    '▶': 'next',
                    '⏩': 'last'
                }
            },
            {
                // A page object consists of a name, used as a destination by reactions...
                name: '4th',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    author: {
                        name: 'MCFacts',
                        icon_url: 'https://images-ext-2.discordapp.net/external/P_FeaW-7BLdsiAwbCbYgUjRINkCTyCzFtVZlBaFdkgc/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/712808436588347443/fe95c5190b87504086aec6c295337173.webp?width=450&height=450',
                    },
                    thumbnail: {
                        url: 'https://images-ext-2.discordapp.net/external/W3hC4TaE23CiAVxR2JEC1WJu6W-i0t6v9iK2Z0vcP60/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/381710555096023061/dcfb1234ab17f2afd41d0907e5d8ae61.webp',
                    },
                    color: '#8BC04A',
                    footer: {
                        text: `Page 5/10`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer:**\n[Scorprian#2161](https://discordapp.com/users/381710555096023061)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered Bot:**\n[MCFacts#1999](https://mcfacts.xyz/invite)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot website__: [mcfacts.xyz/](https://mcfacts.xyz/)\n__Bot invite__: [MCFacts invite](https://mcfacts.xyz/invite)\n__Support server__: [Discord.gg](https://discord.gg/sxDtd43)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "Invite the MCFacts bot to your server today to enjoy plenty of interactive minecraft content !!! You can use the bot to discover information on almost everything minecraft and get live updates directly from the Minecraft Twitter Account."
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
                reactions: {
                    '⏪': 'first',
                    '◀': 'previous',
                    '🗑️': 'delete',
                    '▶': 'next',
                    '⏩': 'last'
                }
            },
            {
                // A page object consists of a name, used as a destination by reactions...
                name: '5th',
                // A MessageEmbed to actually send in chat, and...
                content: new MessageEmbed({
                    author: {
                        name: 'Alph4',
                        icon_url: 'https://images-ext-2.discordapp.net/external/YkmYdi1v7EPr9Fp1AGP7dCzHr2MkJoZb9pt7Odzu_6w/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/658732840783052823/9c4e09471f47b54423a77b9141dd5215.webp?width=450&height=450',
                    },
                    thumbnail: {
                        url: 'https://cdn.discordapp.com/avatars/434693228189712385/a_32883945316ed4719957c1fd301c5261.png',
                    },
                    color: '#1D2237',
                    footer: {
                        text: `Page 6/9`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer:**\n[RCツ#0002](https://discordapp.com/users/434693228189712385)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered Bot:**\n[Alph4#9238](https://dsc.gg/alph4)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot invite__: [Alph4 invite](https://dsc.gg/alph4)\n__Support server__: [Discord.gg](https://dsc.gg/guild)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "A free, verified multi-purpose bot with 6 modules:\n\n🤖 Economy\n🤖 Modmail\n🤖 Moderation\n🤖 Utility\n🤖 Welcome\n🤖 Game"
                }),
                // A set of reactions with destination names attached.
                // Note there's also special destination names (read below)
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
                    author: {
                        name: 'Render Bump',
                        icon_url: 'https://images-ext-1.discordapp.net/external/JE_YRdOZAGke7eroODzOh4yBUlrYe9HNQaKMvKSTedM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/753901422461845534/08032ec4f67570d4e1ba33592e6bb087.webp?width=338&height=338',
                        url: 'https://discord.com/oauth2/authorize?client_id=753901422461845534&scope=bot&permissions=536890384',
                    },
                    thumbnail: {
                        url: 'https://images-ext-1.discordapp.net/external/JE_YRdOZAGke7eroODzOh4yBUlrYe9HNQaKMvKSTedM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/753901422461845534/08032ec4f67570d4e1ba33592e6bb087.webp?width=338&height=338',
                    },
                    color: 'RED',
                    footer: {
                        text: `Page 7/9`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Bot developer**:\n[Scorprian#2161](https://discordapp.com/users/381710555096023061)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Partnered bot**:\n[Render Bump#7795](https://discord.com/oauth2/authorize?client_id=753901422461845534&scope=bot&permissions=536890384)',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Bot invite__: [Invite](https://discord.com/oauth2/authorize?client_id=753901422461845534&scope=bot&permissions=536890384)\n__Support server__: [Discord.com](https://discord.com/invite/h7WUxBN)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "The simple solution to advertisement"
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
                name: '5th',
                content: new MessageEmbed({
                    author: {
                        name: 'Anime Park🌸',
                        url: 'https://discord.gg/87vptSp2ru',
                    },
                    thumbnail: {
                        url: 'https://images-ext-1.discordapp.net/external/9lJrP980ZsG5I-2JE_8MtkC6OaKBaYLdaTxbFFUvS6Y/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/727792808962031617/a_4a055127ed959f65f38ca8314bf3bc50.gif',
                    },
                    color: '#C84977',
                    footer: {
                        text: `Page 8/9`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Server Founder:**\n[OGGY#0007](https://discordapp.com/users/727792808962031617)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: "**Partnered Server:**\n[Anime Park🌸](https://discord.gg/87vptSp2ru)",
                            inline: true,
                        },
                        {
                            name: '** **',
                            value: '**Links:**\n__Server Invite Link__: [discord.gg](https://discord.gg/87vptSp2ru)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "We're a constantly evolving community of friends who have one goal; having fun. By joining Anime Park, you've made the decision that you want to be a part of something big. You've made the first big leap to commit yourself to a community. It's very important that I tell you some things first. Be the change you want to see in our community. You can treat this place like it's yours. We're always looking for passionate individuals who want to express their ideas and contribute in any way whether its an overall positive atmosphere or to express yourself, we seek to empower those with good intentions."
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
                name: 'last',
                content: new MessageEmbed({
                    author: {
                        name: 'Open partnership slot.',
                        icon_url: bot.user.avatarURL(),
                    },
                    thumbnail: {
                        url: bot.user.avatarURL(),
                    },
                    color: '#ffc0cb',
                    footer: {
                        text: `Page 9/9`,
                        icon_url: message.author.displayAvatarURL({ size: 32 }),
                    },
                    fields: [
                        {
                            name: '** **',
                            value: '**Links:**\n__Support Server__: [ToD Development](https://discord.gg/PVC35NbeTD)',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                            inline: true,
                        },
                    ],
                    description: "Would you look at that, you have stumbled upon a open partnership slot!\n\nIf you'd like to claim this spot, head to the support link listed below and dm **Nek**, __bot__ and __server__ partnerships are accepted!"
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
            // This is optional, and defaults to 180000 (3 minutes)
           
            
            // The last parameter is the number of milliseconds you want the menu to collect reactions for each page before it stops to save resources
            // The timer is reset when a user interacts with the menu.
            // This is optional, and defaults to 180000 (3 minutes).
        ], 300000)
        // Run Menu.start() when you're ready to send the menu in chat.
        // Once sent, the menu will automatically handle everything else.
        helpMenu.start()
}

       // let PartnerEmbed = new Discord.MessageEmbed()
        // .setAuthor("ToD (Truth or Dare) Partners/affiliates.")
        // .setColor('#9c7dbc')
        // .addField('Partner __#1__:', 'Bot developer:\n```c++\nForGetFulSkyBro#9999``` ', true)
        // .addField('** **', 'Discord Bot:\n[```c++\nForGetFul#4138```](https://discord.com/oauth2/authorize?client_id=595966684100034578&scope=bot&permissions=1022487575)',true)
// message.channel.send(PartnerEmbed)

}
