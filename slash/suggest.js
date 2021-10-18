const { MessageEmbed, WebhookClient, Collection } = require("discord.js");
const talkedRecently = new Set();
const db = require("quick.db");
require("dotenv").config();
module.exports = {
  slash: {
    name: "suggest",
    description:
      "Sends a suggestion, may include truth/dare suggestions as well. ",
    commandOptions: [
      {
        type: 3,
        name: "suggestion",
        description: "Suggestion to be sent to the support server.",
        required: true,
      },
    ],
  },
  global: true,
  async execute(interaction, int, client) {
    let suggestion = db.set(
      "suggestion",
      `${interaction.data.options[0].value}`
    );

    let bugreportembedbecausewhythefucknotsohereistheembedname =
      new MessageEmbed()
        .setTitle(
          "<:image_20210516_090215:843518719506645003> New Suggestion! <:image_20210516_090215:843518719506645003>"
        )
        .addField("__Suggestion:__", suggestion)
        .addField(
          "__Suggested By:__",
          `${interaction.member.user.username}#${interaction.member.user.discriminator}\n \`${interaction.member.user.id}\` `
        )
        .setTimestamp()
        .setColor("#cbbdd7");

    const webhookClient = new WebhookClient({
      id: `878104339477037067`,
      token:
        "3Q6qRGlq2Zc9EdjPIpI3_LiZggM7nlu5fmL7gjYTviK-05pRMOMHX1Q65iEyzOEKL4Io",
    });

    webhookClient.send({
      username: "ToD Suggestions",
      avatarURL: client.user.avatarURL(),
      embeds: [bugreportembedbecausewhythefucknotsohereistheembedname],
    });

    let finalembed = new MessageEmbed()
      .setTitle("Suggestion sent!")
      .setColor("GREEN")
      .setDescription(
        `Your suggestion "\`${suggestion}\`" has successfully been sent to the development server to be reviewed! <:KannaPet:843534507419107338>`
      );

    return client.api
      .interactions(interaction.id, interaction.token)
      .callback.post({
        data: {
          type: 4,
          data: {
            components: [
              {
                type: 1,
                components: [
                  {
                    type: 2,
                    label: "Support Server",
                    style: 5,
                    url: "http://nek.wtf/support",
                  },
                ],
              },
            ],
            embeds: [finalembed],
          },
        },
      });
  },
};
