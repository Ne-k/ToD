module.exports = {
    config: {
        name: "wyr",
        usage: "wyr",
        description: "**W**ould **Y**ou **R**ather questions.",
    },
    run: async (bot, message, args) => {
        const wyr = require("wyr");

        // wyr is a function and returns a promise with a object containing your questions
        wyr().then((response) => {
            // or .then(console.log) hehe
            message.channel
                .send({
                    embeds: [
                        new bot.messageembed()
                            .setColor("BLUE")
                            .setAuthor(
                                `Let us play Would You rather!`,
                                message.author.avatarURL({dynamic: true})
                            )
                            .setDescription(
                                `Would you rather:\n\n<:image_20210516_090228:843518773708324884> - \`${response.blue.question}\`\nor\n<:image_20210516_090221:843518746052001793> - \`${response.red.question}\``
                            ),
                    ],
                })
                .then((msg) => {
                    msg.react("<:image_20210516_090228:843518773708324884>");
                    msg.react("<:image_20210516_090221:843518746052001793>");
                });
        });
    },
};
