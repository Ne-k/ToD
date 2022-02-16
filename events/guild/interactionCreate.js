const {MessageEmbed} = require("discord.js");
module.exports = async (client, interaction) => {
    if(interaction.isButton()) {

      if (interaction.customId === "confirm") {
          client.db.set(`nsfwEnabled_${interaction.guild.id}`, true);
          interaction.reply({
                  embeds: [
                      new MessageEmbed()
                          .setColor("GREEN")
                          .setDescription("I have successfully enabled NSFW truths and dares.")
                          .setFooter(
                              {
                                  text: "This message will automatically delete in 30 seconds"
                              }
                          ),
                  ],
                  ephemeral: true
              })
      }

      if (interaction.customId === "cancel") {
          interaction.reply({
                  embeds: [
                      new MessageEmbed()
                          .setColor("DARK_NAVY")
                          .setDescription("Your selection has been canceled!")
                          .setFooter({
                              text: "This message will automatically delete in 30 seconds"

                          }),
                  ],
                  ephemeral: true
              })
          setTimeout(() => interaction.deleteReply(), 5000)
      }
  }
}