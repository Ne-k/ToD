const {EmbedBuilder, Embed} = require("discord.js");
module.exports = {
        name: "help",
        description: "Help Menu",
        aliases: ["h"],
        example: "1) help\n2) help util\n3) help anime\n4)help",
    run: async (client, message, args) => {

        try {
            switch(args[0]) {
                case "util":
                    message.channel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("Random")
                                .setTitle("Command Help Panel")
                                .setDescription(
                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\n \`disable\` | \`enable\` | \`help\` | \`snipe\` \n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                )
                                .setFooter({text:
                                    client.commands.size + ` total commands.`,
                                }),
                        ],
                    })
                    break;
                case "all":
                    message.channel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("Random")
                                .setTitle("Command Help Panel")
                                .setDescription(
                                    `*Execute the command \`${process.env.PREFIX}help <Command_name>\` for more information on the command.\n<:pink_dash:1045563536283287562> __**Anime Corner**__:\n\`aniquote\`\, \`anisearch\`\, \`azurlane\`\, \`awoo\`\, \`booru\`\, \`foxes\`\, \`kitsune\`\, \`megumin\`\, \`neko\`, \`nekopara\`\, \`okami\`\, \`rem\`\, \`senko\`, \`sfwanime\`\, \`shinobu\`\, \`waifugen\`\n\n
<:orange_dash:1045563279055011920> __**Utility**__:\n\`disable\`, \`enable\`, \`help\`\, \`snipe\`\n\n<:purple_dash:1045563559024808017> __**Miscellaneos**__:\n\`botinfo\`\, \`invite\`\, \`ping\`\, \`policy\`\, \`suggest\`\n\n<:red_dash:1045563585813823488> __**Main Features**__:\n\`truth\`\, \`dare\`\, \`fact\`\, \`why\`\, \`wyr\`\n\n<:yellow_dash:1045563510874185738> __**Affections / Roleplay**__\n\`bite\`\, \`blush\`\, \`bonk\`\, \`cry\`\, \`cuddle\`\, \`dance\`\, \`feed\`\, \`glomp\`\, \`happy\`\, \`hug\`\, \`kiss\`, \`lick\`\, \`nom\`\, \`pat\`\, \`poke\`\, \`pout\`\, \`punch\`\, \`slap\`\, \`smile\`\, \`smug\`\, \`tickle\`\, \`wag\`\, \`stare\`\, \`wave\`\, \`wink\`\n\n__**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                )
                                .setFooter({text:
                                    client.commands.size + ` total commands.`,
                                }),
                        ],
                    });
                    break;
                case "anime":
                    message.channel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("Random")
                                .setTitle("Command Help Panel")
                                .setDescription(
                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\n \`aniquote\` | \`anisearch\`\ | \`azurlane\` | \`awoo\`| \`foxes\` | \`kitsune\` | \`megumin\` | \`neko\` \`nekopara\` | \`okami\` | \`rem\` | \`senko\` | \`sfwanime\` | \`shinobu\` | \`waifugen\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                )
                                .setFooter({text:
                                    client.commands.size + ` total commands.`
                                }),
                        ],
                    })
                    break;
                case "roleplay":
                    message.channel.send({embeds: [
                            new EmbedBuilder()
                                .setColor("Random")
                                .setTitle("Command Help Panel")
                                .setDescription(
                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**\n \`bite\` | \`blush\` | \`bonk\` | \`cry\` | \`cuddle\` | \`dance\` | \`feed\` | \`glomp\` | \`happy\` | \`hug\` | \`kiss\` | \`lick\` | \`nom\` | \`pat\` | \`poke\` | \`pout\` | \`punch\` | \`slap\` | \`smile\` | \`smug\` | \`tickle\` | \`wag\` | \`stare\` | \`wave\` | \`wink\`\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                )
                                .setFooter({text:
                                    client.commands.size + ` total commands.`
                                }),
                        ],})
                    break;
                case "main":
                    message.channel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("Random")
                                .setTitle("Command Help Panel")
                                .setDescription(
                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\n\`dare\` | \`truth\`  | \`fact\` | \`why\` | \`wyr\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                )
                                .setFooter({text:
                                    client.commands.size + ` total commands.`
                                }),
                        ],
                    })
                    break;
                case "misc":
                    message.channel.send({
                        embeds: [
                            new EmbedBuilder()
                                .setColor("Random")
                                .setTitle("Command Help Panel")
                                .setDescription(
                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\`botinfo\` | \`invite\` | \`ping\` | \`policy\` | \`suggest\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                )
                                .setFooter({text:
                                    client.commands.size + ` total commands.`
                               } ),
                        ],
                    })
                    break;

                default:
                    const {getColorFromURL} = require("color-thief-node");

                    return message.channel.send({
                            embeds: [
                                new EmbedBuilder()
                                    .setColor("Random")
                                    .setTitle("Command Help Panel")
                                    .setDescription(
                                        `<:pink_dash:1045563536283287562> Use the selection menu below to navigate around the help menu or \`${process.env.PREFIX}help <category>\`\n\n
<:orange_dash:1045563279055011920> **__Categories __**:\n \`all\`, \`roleplay\`, \`anime\`, \`main\`, \`misc\`, \`util\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n**[Private Policy](https://nek.wtf/policy) **|** [Website](https://nek.wtf/tod)** **|** **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                    )
                                    .setFooter({text:
                                        client.commands.size + ` total commands.`,
                                    }),
                            ],
                            components: [
                                {
                                    type: 1,
                                    components: [
                                        {
                                            type: 3,
                                            custom_id: "Selects",
                                            options: [
                                                {
                                                    label: `Home`,
                                                    value: "Home",
                                                    emoji: {
                                                        name: "🏠",
                                                        id: null,
                                                    },
                                                    description: "Go back to the main help page",
                                                },

                                                {
                                                    label: `All`,
                                                    value: "all",
                                                    description: "List all the bot's commands.",
                                                },

                                                {
                                                    label: `Anime`,
                                                    value: "anime",
                                                    description: "Show all the anime commands.",
                                                },
                                                {
                                                    label: `Roleplay / Affections`,
                                                    value: "roleplay",
                                                    description:
                                                        "Show all the roleplay / affection commands.",
                                                },
                                                {
                                                    label: `Main`,
                                                    value: "main",
                                                    description: "Show commands such as truth and dare.",
                                                },
                                                {
                                                    label: `Miscellaneous`,
                                                    value: "misc",
                                                    description: "Show all misc commands.",
                                                },
                                                {
                                                    label: `Delete`,
                                                    emoji: {
                                                        name: "❌",
                                                        id: null,
                                                    },
                                                    value: "delete",
                                                    description: "Delete the help embed.",
                                                },
                                            ],

                                            placeholder: "Choose a category",
                                            default: true,
                                            min_values: 1,
                                            max_values: 1,
                                        },
                                    ],
                                },
                            ],
                        })
                        .then((msg) => {
                            client.on("interactionCreate", async (interaction) => {
                                if (interaction.values[0] === `all`) {
                                    await interaction.deferUpdate();
                                    msg.edit({
                                        embeds: [
                                            new EmbedBuilder()
                                                .setColor("Random")
                                                .setTitle("Command Help Panel")
                                                .setDescription(
                                                    `*Execute the command \`${process.env.PREFIX}help <Command_name>\` for more information on the command.\n<:pink_dash:1045563536283287562> __**Anime Corner**__:\n\`aniquote\`\, \`anisearch\`\, \`azurlane\`\, \`awoo\`\, \`booru\`\, \`foxes\`\, \`kitsune\`\, \`megumin\`\, \`neko\`, \`nekopara\`\, \`okami\`\, \`rem\`\, \`senko\`, \`sfwanime\`\, \`shinobu\`\, \`waifugen\`\n\n
<:orange_dash:1045563279055011920> __**Utility**__:\n\`disable\`, \`enable\`, \`help\`\, \`snipe\`\n\n<:purple_dash:1045563559024808017> __**Miscellaneos**__:\n\`botinfo\`\, \`invite\`\, \`ping\`\, \`policy\`\, \`suggest\`\n\n<:red_dash:1045563585813823488> __**Main Features**__:\n\`truth\`\, \`dare\`\, \`fact\`\, \`why\`\, \`wyr\`\n\n<:yellow_dash:1045563510874185738> __**Affections / Roleplay**__\n\`bite\`\, \`blush\`\, \`bonk\`\, \`cry\`\, \`cuddle\`\, \`dance\`\, \`feed\`\, \`glomp\`\, \`happy\`\, \`hug\`\, \`kiss\`, \`lick\`\, \`nom\`\, \`pat\`\, \`poke\`\, \`pout\`\, \`punch\`\, \`slap\`\, \`smile\`\, \`smug\`\, \`tickle\`\, \`wag\`\, \`stare\`\, \`wave\`\, \`wink\`\n\n__**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                                )
                                                .setFooter({text:
                                                    client.commands.size + ` total commands.`
                                                }),
                                        ],
                                    });
                                }
                                if (interaction.values[0] === "Home") {
                                    await interaction.deferUpdate();
                                    msg.edit({
                                        embeds: [
                                            new EmbedBuilder()
                                                .setColor("Random")
                                                .setTitle("Command Help Panel")
                                                .setDescription(
                                                    `<:pink_dash:1045563536283287562> Use the selection menu below to navigate around the help menu.\n\n
<:orange_dash:1045563279055011920> **__Categories __**:\n \`all\`, \`roleplay\`, \`anime\`, \`main\`, \`misc\`, \`util\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                                )
                                                .setFooter({text: client.commands.size + ` total commands.`, iconURL: message.author.avatarURL({dynamic: true})}),
                                        ],
                                    });
                                }

                                if (interaction.values[0] === "anime") {
                                    await interaction.deferUpdate();

                                    msg.edit({
                                        embeds: [
                                            new EmbedBuilder()
                                                .setColor("Random")
                                                .setTitle("Command Help Panel")
                                                .setDescription(
                                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\n \`aniquote\` | \`anisearch\`\ | \`azurlane\` | \`awoo\`| \`foxes\` | \`kitsune\` | \`megumin\` | \`neko\` \`nekopara\` | \`okami\` | \`rem\` | \`senko\` | \`sfwanime\` | \`shinobu\` | \`waifugen\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                                )
                                                .setFooter({text: client.commands.size + ` total commands.`, iconURL: message.author.avatarURL({dynamic: true})}),
                                        ],
                                    });
                                }

                                if (interaction.values[0] === "roleplay") {
                                    await interaction.deferUpdate();
                                    msg.edit({
                                        embeds: [
                                            new EmbedBuilder()
                                                .setColor("Random")
                                                .setTitle("Command Help Panel")
                                                .setDescription(
                                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**\n \`bite\` | \`blush\` | \`bonk\` | \`cry\` | \`cuddle\` | \`dance\` | \`feed\` | \`glomp\` | \`happy\` | \`hug\` | \`kiss\` | \`lick\` | \`nom\` | \`pat\` | \`poke\` | \`pout\` | \`punch\` | \`slap\` | \`smile\` | \`smug\` | \`tickle\` | \`wag\` | \`stare\` | \`wave\` | \`wink\`\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                                )
                                                .setFooter({text: 
                                                    client.commands.size + ` total commands.`,
                                                }),
                                        ],
                                    });
                                }

                                if (interaction.values[0] === `main`) {
                                    await interaction.deferUpdate();
                                    msg.edit({
                                        embeds: [
                                            new EmbedBuilder()
                                                .setColor("Random")
                                                .setTitle("Command Help Panel")
                                                .setDescription(
                                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\n\`dare\` | \`truth\`  | \`fact\` | \`why\` | \`wyr\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                                )
                                                .setFooter({text:
                                                    client.commands.size + ` total commands.`,
                                                }),
                                        ],
                                    });
                                }
                                if (interaction.values[0] === `delete`) {
                                    setTimeout(() => {
                                        msg.delete();
                                    }, 0);
                                }
                                if (interaction.values[0] === "misc") {
                                    await interaction.deferUpdate();

                                    msg.edit({
                                        embeds: [
                                            new EmbedBuilder()
                                                .setColor("Random")
                                                .setTitle("Command Help Panel")
                                                .setDescription(
                                                    `<:pink_dash:1045563536283287562> Run \`${process.env.PREFIX}help <command>\` for more information on the command.\n\n
<:orange_dash:1045563279055011920> **__Commands __**:\`botinfo\` | \`invite\` | \`ping\` | \`policy\` | \`suggest\`\n\n<:red_dash:1045563585813823488> __**Links**__:\n **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**`
                                                )
                                                .setFooter({text:  client.commands.size + ` total commands.`}),
                                        ],
                                    });
                                }
                            });

                        });

            }


    } catch (err) {
        return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Contact Nek#2937 or join the support server.`);
    }
},
};

            /*
              if(args[0].toLowerCase() === "all") {
                  const { getColorFromURL } = require('color-thief-node');


                  const dominantColor1 = await getColorFromURL(message.author.avatarURL({format: 'png'}))

                  return message.channel.send({embeds: [new client.messageembed().setColor(dominantColor1).setAuthor('Help Command Panel:', client.user.avatarURL({format: 'png'})).setDescription(`*Execute the command \`${process.env.PREFIX}help <Command_name>\` for more information on the command.\n<:pink_dash:1045563536283287562> __**Anime Corner**__:\n\`aniquote\`\, \`anisearch\`\, \`azurlane\`\, \`awoo\`\, \`booru\`\, \`foxes\`\, \`kitsune\`\, \`megumin\`\, \`nagisa\`\, \`neko\`, \`nekopara\`\, \`okami\`\, \`nep\`\, \`random-anime\`\, \`rem\`\, \`sfwanime\`\, \`shinobu\`\, \`waifu\`\, \`waifugen\`\n\n
<:orange_dash:1045563279055011920> __**Utility**__:\n\`avatar\`\, \`disable\`, \`enable\`, \`help\`\, \`process.env.PREFIX\`\, \`snipe\`\n\n<:purple_dash:1045563559024808017> __**Miscellaneos**__:\n\`botinfo\`\, \`invite\`\, \`ping\`\, \`policy\`\, \`suggest\`\, \`uptime\`\n\n<:red_dash:1045563585813823488> __**Main Features**__:\n\`truth\`\, \`dare\`\, \`fact\`\, \`topic\`\, \`why\`\, \`wyr\`\n\n<:yellow_dash:1045563510874185738> __**Affections / Roleplay**__\n\`bite\`\, \`blush\`\, \`bonk\`\, \`cry\`\, \`cuddle\`\, \`dance\`\, \`feed\`\, \`glomp\`\, \`happy\`\, \`horny\`\, \`hug\`\, \`kiss\`, \`lick\`\, \`nom\`\, \`pat\`\, \`poke\`\, \`pout\`\, \`punch\`\, \`slap\`\, \`smile\`\, \`smug\`\, \`tickle\`\, \`wag\`\, \`stare\`\, \`wave\`\, \`wink\``).setFooter(client.commands.size + ` total commands.`, message.author.avatarURL({dynamic: true}))]})
              }
      if(args[0].toLowerCase() === "anime") {

          let embed = new MessageEmbed()
              .setTitle('**[ ANIME CORNER ]**')
              .setDescription(`__\`${process.env.PREFIX}help <command_name>\` for more information__`)
              .setColor("#7975a8") // Set the color
              .addField(`** **`,`- \`aniquote\`\n- \`anisearch\`\n- \`azurlane\`\n-  \`awoo\`\n- \`booru\`\n- \`foxes\`\n- \`kitsune\`\n- \`megumin\`\n- \`nagisa\`\n- \`neko\``, true)
              .addField('** **', `- \`nekopara\`\n- \`okami\`\n- \`nep\`\n- \`random-anime\`\n- \`rem\`\n- \`sfwanime\`\n- \`shinobu\`\n- \`waifu\`\n- \`waifugen\``, true)
      return message.channel.send({embeds: [embed]})
      }


      else if(args[0].toLowerCase() === "util") {
          var embed1 = new MessageEmbed()
          .setTitle('**[ UTILITY ]**')
          .setColor("#cbbdd7") // Set the color
          .setDescription(`__\`${process.env.PREFIX}help <command_name>\` for more information__`)
          .addField('** **', `- \`disable\`\n- enable\n- \`help\`\n- \`process.env.PREFIX\`\n- \`snipe\``)
          return message.channel.send({embeds: [embed1]})
      }

      else if(args[0].toLowerCase() === "misc") {
          var embed1 = new MessageEmbed()
          .setTitle('**[ MISCELLANEOUS ]**')
          .setColor("#815498") // Set the color
          .setDescription(`__\`${process.env.PREFIX}help <command_name>\` for more information__`,)
          .addField('** **', `- \`botinfo\`\n- \`invite\`\n- \`ping\`\n- \`policy\`\n- \`suggest\`\n- \`uptime\``)
          return message.channel.send({embeds: [embed1]})
      }
      else if(args[0].toLowerCase() === "main") {
          var embed1 = new MessageEmbed()
          .setTitle('**[ MAIN ]**')
          .setColor("#7975a8") // Set the color
          .setDescription(`__\`${process.env.PREFIX}help <command_name>\` for more information__`)
          .addField('** **', `- \`truth\`\n- \`dare\`\n- \`fact\`\n- \`topic\`\n- \`why\`\n- \`wyr\``)
          return message.channel.send({embeds: [embed1]})
      }
      else if(args[0].toLowerCase() === "roleplay") {
          var embed1 = new MessageEmbed()
          .setTitle('**[ AFFECTIONS // ROLEPLAY ]**')
          .setColor("#7975a8") // Set the color
          .setDescription(`__\`${process.env.PREFIX}help <command_name>\` for more information__`)
          .addField('** **', `- \`bite\`\n- \`blush\`\n- \`bonk\`\n- \`cry\`\n- \`cuddle\`\n- \`dance\`\n- \`feed\`\n- \`glomp\`\n- \`happy\`\n- \`horny\`\n- \`hug\`\n-\`kiss\``,true )
          .addField('** **', `- \`lick\`\n- \`nom\`\n- \`pat\`\n- \`poke\`\n- \`pout\`\n- \`punch\`\n- \`slap\`\n- \`smile\`\n- \`smug\`\n- \`tickle\`\n- \`wag\`\n- \`stare\`\n- \`wave\`\n- \`wink\``, true)
          return message.channel.send({embeds: [embed1]})
      }
      else {
          const embed = new MessageEmbed()
          .setColor("#d9d9d9")
          .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
          .setThumbnail(client.user.displayAvatarURL())
          let CC = ["#815498", "#f1cdc8", "#eaecf3", "#dcadae", "#cbbdd7", "#a7a2d0"];
          if(!message.content.startsWith(process.env.PREFIX))  {
              return;
          }
          let result = Math.floor((Math.random() * CC.length));
          let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
          if (!command) {
              message.channel.send({embeds: [new client.messageembed().setDescription(`\`${args[0]}\` is not a valid command. Use the command \`${process.env.PREFIX}help\` to see all of the commands.`).setColor('RED')]})
          }
          command = command.config
          let SHembed = new MessageEmbed()
                  .setColor(CC[result])
                  .setAuthor(`ToD Command Help Panel`, client.user.avatarURL())
                  .setThumbnail(client.user.avatarURL())
                  .setDescription(`\n\n**Command:** \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`\n**Description:** \`${command.description || "No Description provided."}\`\n**Usage:** \`${command.usage ? `\`${command.usage}\`` : "No Usage"}\`\n**Examples:** \`${command.example ? `\`${command.example}\`` : "No Examples Found"}\`\n**Aliases:** \`${command.aliases ? command.aliases.join(" , ") : "None."}\``)
      return message.channel.send({embeds: [SHembed]})

      }
      */



