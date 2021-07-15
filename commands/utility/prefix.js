const db = require("quick.db")
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')


module.exports = {
    config: {
        name: "prefix",
        description: "Chnage/Know The server's Prefix or the Global Prefix",
        usage: "prefix <new prefix/reset>",
        example: "1) prefix = \n2) prefix reset",
        aliases: ["prefix", "setprefix"]
    },

    run: async (client, message, args) => {
      const { PREFIX } = client.default.prefix
let option = args.join(" ");

        if(!message.member.hasPermission("MANAGE_GUILD")) {
            let errorembed = new MessageEmbed()
            .setTitle('Invalid permissions.')
            .setDescription("You do not have the required permission(s) to change the guild's prefix. - \`MANAGE_GUILD\`")
            .setColor('RED')
                     return message.channel.send({embeds: [errorembed]})
                   }
                 
                 if(!option) {
                  
                     prefix = db.fetch(`prefix_${message.guild.id}`)
                     
                     if (!prefix) prefix = PREFIX;
                     let nooption = new MessageEmbed()
                     .setTitle('Guild prefix:')
                     .setDescription(`My prefix for \`${message.guild.name} is \`${prefix}\` - Type \`${prefix}help\` for the list of commands. My **default** (global) prefix is \`t;\``)
                     .setColor('GREEN')
                   message.channel.send({embeds: [nooption]});
                 }
     
                 if(option.toLowerCase() === "reset") {
                     db.delete(`prefix_${message.guild.id}`)
                     let prefixisreset = new MessageEmbed()
                     .setTitle('Reset prefix.')
                     .setDescription(`Successfully reseted the prefix back to the global/default prefix: \`t;\`.`)
                     .setColor('GREEN')
                     return await message.channel.send({embeds: [prefixisreset]})
                 }
                 
                 if(args[1]) {
                   let moreoneargs = new MessageEmbed()
                     .setTitle('Error.')
                     .setDescription(`You can not set prefix a double argument`)
                     .setColor('RED')
                   return message.channel.send({embeds: [moreoneargs]})
                 }
                 
                 if(args[0].length > 20) {
                   let moreoneargs = new MessageEmbed()
                     .setTitle('Error.')
                     .setDescription(`You can not send prefix more than 20 characters`)
                     .setColor('RED')
                   return message.channel.send({embeds: [moreoneargs]})
                 }
                 
                 if(args.join("") === PREFIX) {
                   db.delete(`prefix_${message.guild.id}`)
                   let resetprefixembed = new MessageEmbed()
                     .setTitle('Success!')
                     .setDescription(`I have reset the prefix back to: \`t;\``)
                     .setColor('GREEN')
                  return await message.channel.send({embeds: [resetprefixembed]})
                 }
                 
                 db.set(`prefix_${message.guild.id}`, args[0])
                 let resetprefixembed = new MessageEmbed()
                     .setTitle('Success!')
                     .setDescription(`I have set the guild prefix to: \`${args[0]}\` Enjoy! `)
                     .setColor('GREEN')
               await message.channel.send({embeds: [resetprefixembed]})
                 

        }
        
    }