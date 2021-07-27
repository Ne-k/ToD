module.exports = {
    config: {
        name: "reload",
        aliases: ["r"]
        
    },
    run: async (client, message, args) => {
        const Discord = require('discord.js')
        if (!client.default.developers.includes(message.author.id)) {
            let userAccess = new Discord.MessageEmbed()
            .setTitle("eval")
            .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
            .setColor("#cdf785");
            message.channel.send({embeds: [userAccess]})
        }
        if(client.default.developers.includes(message.author.id)) {

        


if(!args[0]) return message.channel.send({embeds: [new Discord.MessageEmbed().setDescription('Please provide a command name. <a:awaugery:854870881046102067>').setColor('RED')]});
let commandName = args[0].toLowerCase();
try {
let directory;
try {
    delete require.cache[require.resolve(`../affections/${commandName}.js`)];
    directory = "affections";
} catch {
    try {
        delete require.cache[require.resolve(`../Anime corner/${commandName}.js`)];
        directory = "Anime Corner"
    } catch {
        try {
            delete require.cache[require.resolve(`../Main Features/${commandName}.js`)];
            directory = "Main Features"
        } catch {
           
        try {
            delete require.cache[require.resolve(`../Misc/${commandName}.js`)];
            directory = "Misc"
        } catch {
            try {
                delete require.cache[require.resolve(`../Owner/${commandName}.js`)];
                directory = "Owner"
            } catch {
            try {
                delete require.cache[require.resolve(`../utility/${commandName}.js`)];
                directory = "utility"
            } catch {
                return message.channel.send({embeds: [new Discord.MessageEmbed().setDescription('The command name provided does not exist, or was spelled incorrectly. <:Konata_Cry:869312354087739432>').setColor('RED')]});
            }
        }
    }
    
}
}
}

client.commands.delete(commandName);
const pull = require(`../${directory}/${commandName}`);
client.commands.set(commandName, pull);
return message.channel.send({embeds: [new Discord.MessageEmbed().setDescription(`Successfully reloaded \`${args[0]}\` <a:Konata_Hype:855509096625995816>`).setColor('GREEN')]});
} catch(e) {
console.log(e)
    return message.channel.send({embeds: [new Discord.MessageEmbed().setColor('DARK_RED').setDescription(`Looks like I'm having issues restarting the command. Check the console for more information.`)]})
}
        }
    }
}
