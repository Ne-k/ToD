const { MessageEmbed } = require("discord.js");

module.exports = { 
  config: {
    name: "hex",
    usage: "t;hex",
    description: "Show's ToD's used hex codes.",
  
  },
  run: async (bot, message, args) => {
    if (message.channel.type == "dm") return message.channel.send("<a:No:776584754031493173> | This command command is disabled for DMs, please use this within a server!");
    let bicon = bot.user.displayAvatarURL; //bot avatar
    let botembed = new MessageEmbed()
        .setTitle("ToD's used hex codes:")
        .setColor('BLUE')   //hex color randomizer
        .setDescription("<:815498:782671600612802591> - #815498 / 8475800\n<:f1cdc8:782799218779488328> - #f1cdc8 / 15846856\n<:eaecf3:782692461431619624> - #eaecf3 / 15396083\n<:dcadae:782799470483996682> - #dcadae / 14462382\n<:cbbdd7:782671449324126208> - #cbbdd7 / 13352407\n<:a7a2d0:782799394855583775> - #a7a2d0 / 10986192\n<:9c7dbc:782799129189285889> - #9c7dbc / 10255804\n<:7975a8:782799548783132682> - #7975a8 / 7959976")
        .setFooter('The color codes includes HEX and decimal forms.')
    message.channel.send(botembed);
    
  }
}
