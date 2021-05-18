const { MessageEmbed } = require("discord.js");
const moment = require("moment");


module.exports = {
  config: {
    name:"userinfo",
    aliases: ["whois", "ui"],
    usage: "t;userinfo <@user>",
    description: "Get some information on a user such as their roles",
    example: "userinfo @nek"
  },
  run: async (bot, message, args) => {
    if (message.channel.type == "dm") return message.channel.send("This command only works in a server!");
    let CC = ["#815498", "#f1cdc8", "#eaecf3", "#dcadae", "#cbbdd7", "#a7a2d0"]
    let result = Math.floor((Math.random() * CC.length));
    

    var permissions = [];
    var acknowledgements = 'None';
   
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
   
    
      const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
      const Correctpermissions = member.permissions.toArray().map(perm => {
          return perm
            .toLowerCase()
            .replace(/,/g, ", ") 
            .replace(/_/g, " ")
            .replace(/\w\S*/g, txt => {
              // Capitalize the first letter of each word
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        });
      
      if(message.member.hasPermission("KICK_MEMBERS")){
          permissions.push("Kick Members");
      }
      
      if(message.member.hasPermission("BAN_MEMBERS")){
          permissions.push("Ban Members");
      }
      
      if(message.member.hasPermission("ADMINISTRATOR")){
          permissions.push("Administrator");
      }
  
      if(message.member.hasPermission("MANAGE_MESSAGES")){
          permissions.push("Manage Messages");
      }
      
      if(message.member.hasPermission("MANAGE_CHANNELS")){
          permissions.push("Manage Channels");
      }
      
      if(message.member.hasPermission("MENTION_EVERYONE")){
          permissions.push("Mention Everyone");
      }
  
      if(message.member.hasPermission("MANAGE_NICKNAMES")){
          permissions.push("Manage Nicknames");
      }
  
      if(message.member.hasPermission("MANAGE_ROLES")){
          permissions.push("Manage Roles");
      }
  
      if(message.member.hasPermission("MANAGE_WEBHOOKS")){
          permissions.push("Manage Webhooks");
      }
  
      if(message.member.hasPermission("MANAGE_EMOJIS")){
          permissions.push("Manage Emojis");
      }
  
      if(permissions.length == 0){
          permissions.push("No Key Permissions Found");
      }
  
      if(member.user.id == message.guild.ownerID){
          acknowledgements = 'Server Owner';
      }
      if(member.user.id == process.env.Owner_ID){
          acknowledgements = 'Bot Developer';
      }
      if(member.user.id == '813875382972973088'){
          acknowledgements = 'The Idiot';
      }
      if(member.user.id == '550083219136053259'){
          acknowledgements = 'Another Idiot';
      }
      if(member.user.id == '622890595614195722'){
        acknowledgements = 'Taz';
    }
  let total_permissions = Correctpermissions.join(" | ")
      const embed = new MessageEmbed()
          .setDescription(`<@${member.user.id}>`)
          .setTitle(`${member.user.tag}`, message.author.displayAvatarURL)
          .setColor(CC[result])
          .setFooter(`ID: ${member.user.id}`)
          .setThumbnail(member.user.displayAvatarURL())
          .setTimestamp()
          .addField("__Discriminator__", `\`#${member.user.discriminator}\``)
          .addField("__Acknowledgements__", `\`${acknowledgements}\``, true)
          .addField(`__Joined at__ [${moment(member.joinedAt).fromNow()}]`,`\`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\``, true)
          .addField(`__Created at__ [${moment(member.user.createdAt).fromNow()}]`,`\`${moment(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}\` `, true)
          .addField(`__Roles__ [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`)
          .addField(`__Permissions__`, `\`${total_permissions}\``)
          
      message.channel.send({embed});
  
    }
  }
  
  
  