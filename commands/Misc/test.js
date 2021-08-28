
module.exports = {
    config: {
        name: "test",
        description: "Test command to debug the bot or just test",
    
    },
    run: async (client, message, args) => {
const { MessageEmbed, Permissions } = require('discord.js')

       return message.channel.send({
            content: 'Test',

            "components": [
                {
                "type": 1,
                "components": [
                  {
                    "type": 2,
                    "label": "Debug", 
                    "style": 3, 
                    "custom_id": 'debug'
                  },
                  {
                      "type": 2, 
                      "label": "Delete", 
                      "style": 4, 
                      "custom_id": "del"
                  }
                ]
               
                }
                ],
        }).then(m => {
            client.on('interactionCreate', async (interaction) => {
                if(interaction.guildId != message.guild.id) return;
                if(interaction.user.id !== message.author.id) return;
    
    
                if(interaction.customId == 'debug') {
                    setTimeout(() => m.delete(), 0);
                    return message.channel.send({
                        embeds: [new MessageEmbed().setColor('DARK_GOLD').addField(`__General Permissions__`, `\`\`\`diff\n${message.guild.me.permissions.has(Permissions.FLAGS.ADMINISTRATOR) == true ? '+' : '-'} ADMINISTRATOR\n${message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) == true ? '+' : '-'} MANAGE_CHANNELS\n${message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES) == true ? '+' : '-'} MANAGE_ROLES\n${message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS_AND_STICKERS) == true ? '+' : '-'} MANAGE_EMOJIS_AND_STICKERS\n${message.guild.me.permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG) == true ? '+' : '-'} VIEW_AUDIT_LOG\n${message.guild.me.permissions.has(Permissions.FLAGS.VIEW_GUILD_INSIGHTS) == true ? '+' : '-'} VIEW_GUILD_INSIGHTS\n${message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_WEBHOOKS) == true ? '+' : '-'} MANAGE_WEBHOOKS\n${message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_GUILD) == true ? '+' : '-'} MANAGE_GUILD\n${message.guild.me.permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE) == true ? '+' : '-'} CREATE_INSTANT_INVITE\n${message.guild.me.permissions.has(Permissions.FLAGS.CHANGE_NICKNAME) == true ? '+' : '-'} CHANGE_NICKNAME\n${message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS) == true ? '+' : '-'} KICK_MEMBERS\n${message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS) == true ? '+' : '-'} BAN_MEMBERS\n\`\`\``, true).addField('__Text Permissions__', `\`\`\`diff\n${message.guild.me.permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY) == true ? '+' : '-'} READ_MESSAGE_HISTORY\n${message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES) == true ? '+' : '-'} SEND_MESSAGES\n${message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS) == true ? '+' : '-'} EMBED_LINKS\n${message.guild.me.permissions.has(Permissions.FLAGS.ATTACH_FILES) == true ? '+' : '-'} ATTACH_FILES\n${message.guild.me.permissions.has(Permissions.FLAGS.ADD_REACTIONS) == true ? '+' : '-'} ADD_REACTIONS\n${message.guild.me.permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS) == true ? '+' : '-'} USE_EXTERNAL_EMOJIS\n${message.guild.me.permissions.has(Permissions.FLAGS.MENTION_EVERYONE) == true ? '+' : '-'} MENTION_EVERYONE\`\`\``, true).addField('__Voice Permissions__', `\`\`\`diff\n${message.guild.me.permissions.has(Permissions.FLAGS.VIEW_CHANNEL) == true ? '+' : '-'} VIEW_CHANNEL\n${message.guild.me.permissions.has(Permissions.FLAGS.CONNECT) == true ? '+' : '-'} CONNECT\n${message.guild.me.permissions.has(Permissions.FLAGS.SPEAK) == true ? '+' : '-'} SPEAK\n${message.guild.me.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER) == true ? '+' : '-'} PRIORITY_SPEAKER\n${message.guild.me.permissions.has(Permissions.FLAGS.MUTE_MEMBERS) == true ? '+' : '-'} MUTE_MEMBERS\n${message.guild.me.permissions.has(Permissions.FLAGS.DEAFEN_MEMBERS) == true ? '+' : '-'} DEAFEN_MEMBERS\n${message.guild.me.permissions.has(Permissions.FLAGS.MOVE_MEMBERS) == true ? '+' : '-'} MOVE_MEMBERS\n${message.guild.me.permissions.has(Permissions.FLAGS.REQUEST_TO_SPEAK) == true ? '+' : '-'} REQUEST_TO_SPEAK\`\`\``)]
                    })
                }

                if(interaction.customId == 'del') {
                    setTimeout(() => m.delete(), 0)
                }
            })
        })

        
    }
}