


module.exports = {
  config: {
      name: "wyr",
      usage: "wyr",
      description: "**W**ould **Y**ou **R**ather questions.",
  },
  run: async (bot, message, args) => {
    fetch("https://nekos.life/api/v2/why").then((res) => res.json()).then(async (data) => {

     
      
      let factEmbed = new Discord.MessageEmbed()
.setColor('#eaecf3')
.setTitle("Why")
.setDescription(data.why)
return message.channel.send({embeds: [factEmbed]})
  })
  }
}
