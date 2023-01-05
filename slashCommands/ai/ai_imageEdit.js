const {ApplicationCommandType, EmbedBuilder} = require("discord.js");
const {Configuration, OpenAIApi} = require("openai");
const fs = require('fs');
const download = require('image-downloader');
module.exports = {
    name: 'ai_edit',
    description: "Creates an edited or extended image given an original image and a prompt.",
    type: ApplicationCommandType.ChatInput,
    category: "ai",
    cooldown: 5000,
    options: [
        {
            name: "prompt",
            description: "The prompt for the ai to generate a picture based on",
            type: 3,
            required: true
        },
        {
            name: "image",
            description: "The image to edit",
            type: 11,
            required: true
        }
    ],
    run: async (client, interaction) => {
        interaction.reply({
            content: "Generating. . ."
        })
        const image = interaction.options.get("image").attachment;
        const prompt = interaction.options.get("prompt").value;
        let FileName = "";

        const imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpg)/i;
        if (!imageRegex.test(image.url)) {
            return interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle("Error!")
                        .setDescription("The image you provided is not a image! We currently only support `.png, .jpg` image files!")
                        .setColor("Red")
                        .setFooter({text: `Requested by ${interaction.user.tag}`})
                ]
            });
        }

        const configuration = new Configuration({
            apiKey: process.env.OPENAIKEY,
        });
        const openai = new OpenAIApi(configuration);

        download.image({
            url: image.url,
            dest: '../../temp',
            extractFilename: true
        })
            .then(async ({filename, image}) => {
                FileName = filename;

                const data = await openai.createImageEdit(
                    fs.createReadStream(filename),
                    null,
                    "1024x1024",
                    2,
                    "1024x1024",
                )

            })
            }
    }