const {MessageEmbed} = require("discord.js");
const childProcess = require("child_process");
module.exports = {
    config: {
        name: "reboot",
        aliases: ["restart"],
    },
    run: async (bot, message, args) => {
        let codeblock = "```";
        if (!process.env.developers.includes(message.author.id)) {
            let userAccess = new MessageEmbed()
                .setTitle("Reboot")
                .setDescription(
                    "Sorry, the `Reboot` command can only be executed by the Developer."
                )
                .setColor("#cdf785");
            return message.channel.send({emebds: [userAccess]});
        }
        if (process.env.developers.includes(message.author.id)) {
            const {MessageEmbed, WebhookClient} = require("discord.js");
            const {exec} = require("child_process");

            if (!args.join(" ")) {
                return childProcess.exec('pm2 status', {}, (err, stdout, stderr) => {
                    if (err)
                        return message.channel.send({
                            embeds: [
                                new MessageEmbed()
                                    .setDescription(`${codeblock}${err}${codeblock}`)
                                    .setColor("RED")
                                    .setFooter({text: "Smooth brain, you failed."}),
                            ],
                        });

                    return message.channel.send({
                        content: `${codeblock}diff\n${stdout}${codeblock}`,
                    });
                });
            }

            if (args[0] === "0") {
                await bot.shard.broadcastEval((client) => client.user.setStatus("idle"));
                bot.user.setActivity(`Rebooting. . .`, {
                    type: "LISTENING",
                });

                const moment = require("moment");
                let manualRebootEmbed = new MessageEmbed()
                    .setColor("YELLOW")
                    .setDescription(
                        `[ MANUAL REBOOT ] - Client has been manually rebooted by **${message.author.tag}**.`
                    )
                    .setFooter({text: moment(Date.now()).format("dddd, MMMM Do")})
                    .setTimestamp();
                const webhookClient = new WebhookClient({
                    id: process.env.CLIENT_LOGGING_ID,
                    token: process.env.CLIENT_LOGGING_WEBHOOK,
                });

                await webhookClient.send({
                    username: "ToD Client Logging",
                    avatarURL: bot.user.avatarURL(),
                    embeds: [manualRebootEmbed],
                });
            }


            await exec("pm2 restart " + args.join(" "), (error, stdout, stderr) => {
                if (error) {
                    console.log(error || `No error`);
                }
                if (stderr) {
                    console.log(stderr || `No stderr`);
                }
            });
        }
        let RebootingEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Now rebooting process \`${args[0]}\``);
        return message.channel.send({embeds: [RebootingEmbed]});
    },
};
