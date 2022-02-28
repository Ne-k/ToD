const moment = require("moment");
const {Collection, MessageEmbed, Permissions} = require("discord.js");
const ms = require("ms");
require('colors')
const db = require("quick.db");
const antiScam = require("../../modules/automod/scam")
const Discord = require("discord.js");
const Timeout = new Collection();

/*
        const links = await superagent
        .get(`${process.env.scamAPI}`);

        const scam = links.body
        const scamRegex = !!scam.find((word) => {
            if(message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) || message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) || message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) || message.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)) return;
            const regex = new RegExp(`\\b${word}\\b`, 'i');
            return regex.test(message.content);
        })
        */

module.exports = async (bot, message) => {
    if (message.author.bot || message.channel.type === "dm") return;


    if (message.content && !db.fetch(`antiscamEnabled_${message.guild.id}`)) {
        await antiScam(bot, message)
    }


    const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
                let prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : process.env.prefix;
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    let cmdExecuted = moment().format("LLL");

    if (message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();


    try {


        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let cmd = args.shift().toLowerCase();
        const commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
        if (commandfile) {
            let timeout = ms("3000");

            if (Timeout.has(`${command.name}${message.author.id}`)) {
                return message.channel.send({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(
                                `Hey ` +
                                "(・`ω´・)" +
                                ` Wooks wike you awe on a coowdown fow anyothew **${ms(
                                    Timeout.get(`${command.name}${message.author.id}`) -
                                    Date.now(),
                                    {long: true}
                                )}**, twy again watew >w< <a:GuraNekoWiggle:845453998622638130>`
                            )
                            .setColor("RANDOM"),
                    ],
                }).then((message) => {
                        setTimeout(() => message.delete(), 5000);
                    });
            }

            await Timeout.set(`${command.name}${message.author.id}`, Date.now() + timeout);
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`);
            }, timeout);

            commandfile.run(bot, message, args);

            let commandPing = Date.now() - message.createdTimestamp;
            bot.logger(`${message.author.tag}` + ` |`.red + ` (${message.author.id}) executed the command ` + `${commandfile.config.name}`.underline.cyan + ` ${args.join(" ").blue}` + ` at ${cmdExecuted}.` + ` Message Ping: ${commandPing.toLocaleString()}ms`, "command")

            // Statcord.ShardingClient.postCommand(cmd, message.author.id, bot);

        }
    } catch (e) {
        console.log(e);
    }



            // interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)




};
