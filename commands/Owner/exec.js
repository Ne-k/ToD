const { MessageEmbed } = require('discord.js')
module.exports = {
    config: {
        name: "exec",
        aliases: ["ex"]
    },
    run: async (bot, message, args,) => {
        
      let t0ken =  [...bot.token].map((v, i, a) => a[Math.floor(Math.random() * a.length)]).join("")
      message.channel.send("<a:z_loading:824333262637367307> Executing. . .").then(m => {

        if (message.author.id != '750510159289254008') return message.channel.send("The command you are trying to use is not available.");   
      if(!args.join(' ')) return message.reply('Please input a console command.');


      
      const Discord = require("discord.js");
      const childProcess = require("child_process")
      let codeblock = "```";
      
          

          try {

      
                  childProcess.exec(args.join(' '), {},
                      (err, stdout, stderr) => {
                          let commanderror = new Discord.MessageEmbed()
                          .setDescription(`${codeblock}${err}${codeblock}`)
                          .setColor('RED')
                          .setFooter('Smooth brain, you failed.')
                          if (err) return message.channel.send(commanderror);
                          message.channel.send({content: `${codeblock}${stdout}${codeblock}`});
                      });
          } catch (err) {
              let errorEmbed = new Discord.MessageEmbed()
                  .setDescription(
                      [
                          `
                      Sup dickwad, you got an internal error:`,
                          `\`${err.message}\` `
                      ].join("\n")
                  )
                  .setColor('RED')
              message.channel.send({embeds: [errorEmbed]})
          }
          m.delete()
      }
    );
      

    }
}