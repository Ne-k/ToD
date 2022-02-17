const {MessageEmbed} = require("discord.js");
const childProcess = require("child_process");
const Discord = require("discord.js");
module.exports = {
    config: {
        name: "exec",
        aliases: ["ex"],
    },
    run: async (bot, message, args) => {
        let t0ken = [...bot.token].map((v, i, a) => a[Math.floor(Math.random() * a.length)]).join("");
        if (!process.env.developers.includes(message.author.id)) {
            return message.channel.send("The command you are trying to use is not available.");
        }
        else {
            message.channel.send("<a:z_loading:824333262637367307> Executing. . .").then((m) => {

                if (!args.join(" "))
                    return message.reply("Please input a console command.");

                const Discord = require("discord.js");
                const childProcess = require("child_process");
                let codeblock = "```";

                try {
                    childProcess.exec(args.join(" "), {}, (err, stdout) => {
                        if (err)
                            return message.channel.send({
                                embeds: [
                                    new MessageEmbed()
                                        .setDescription(`${codeblock}${err}${codeblock}`)
                                        .setColor("RED")
                                        .setFooter({text: "Smooth brain, you failed."}),
                                ],
                            });

                        message.channel.send({content: `${codeblock}diff\n${stdout}${codeblock}`});
                    });
                } catch (err) {
                    let errorEmbed = new Discord.MessageEmbed()
                        .setDescription(
                            [
                                `
                      Sup dickwad, you got an internal error:`,
                                `\`${err.message}\` `,
                            ].join("\n")
                        )
                        .setColor("RED");
                    message.channel.send({embeds: [errorEmbed]});
                }
                setTimeout(() => m.delete(), 0);
            });
        }

    },
};
