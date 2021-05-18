const { MessageEmbed } = require("discord.js");

module.exports = {
    config: {
        name: "policy",
        usage: "t;policy",
        description: "Shows ToD (truth or dare)'s private policy stating if information is stored or collected.",
    
    },
    run: async (bot, message, args) => {

            let Sembed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Tod's private policy:")
            .setDescription("Hello there, it seems like you have wondered into the private policy command. If this was a mistake, feel free to stop reading, if this was intentional feel free to keep reading.")
            .addField("Private Policy", "ToD __does not store information__, such as guild IDs and user IDs because ToD does not have the ability to do so.\nThe things that ToD **does** collect is **User defined timezones** and **deleted messages**, but the information is not stored anywhere as an there is no database or logging system that will keep the data/deleted messages for a long amount of time. Any and all information that is collected is deleted once the command is finished executing.\nOn further note, the developer **cannot** see any information from **any** guild, as I said, it is deleted once the command is finishing executing and there is no system that can let the developer see any guild information.```diff\n- To make it more clear as bot updates go on, any information and/or data that goes to ToD will NOT be stored anywhere would be deleted once the bot has collected the needed data/information and would NOT be shown to the bot developer. The snipe command operates off of the AUDIT logs so therefore no messages and IDs being stored.```")
            .setFooter("For any questions or concerns about the private policy, join the support server using t;support, or DM the developer directly using t;botinfo and sending a friend request to Nek. Policy updated on 12/31/2020")
message.channel.send(Sembed);

}
            
    } 














