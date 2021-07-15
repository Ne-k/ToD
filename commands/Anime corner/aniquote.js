

module.exports = {
  config: {
      name: "aniquote",
      description: "Generates a random anime quote. ",
      usage: "aniquote",
  },
  run: async (bot, message, args) => {

    const { MessageEmbed } = require('discord.js');
const { randomQuote } = require('animequotes');
const { searchAnime } = require('node-kitsu');
    const { quote, anime, id, name } = randomQuote();
    const res = await searchAnime(anime,0).catch(()=>{}) || [];
   
    message.react('<a:loading:777226808063688714>')
    

    

    const image = res?.[0]?.attributes?.coverImage?.original || null;
    message.reactions.removeAll()
    return message.channel.send({
      embeds: [
      new MessageEmbed()
      .setColor(`GREY`)
      .addField(`*Quoted from ${anime}*`,`${quote}\n\n-*${name}*`)
      .setImage(image)
      .setTimestamp()
    ]
      
      
  });
  





  }
  
}