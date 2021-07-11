module.exports = {
    config: {
        name: "waifugen",
        usage: "waifugen",
        description: "Waifu generator using waifu labs/",
    },
    run: async (bot, message, args) => {
   message.channel.startTyping()
        const waifulabs = require('waifulabs');
        const waifus = await waifulabs.generateWaifus();
        const waifu = waifus[0];
        const imageData = waifu.image;
        const image = Buffer.from(imageData, 'base64');
        const fs = require('fs');
        fs.writeFile('ToD-waifu.png', image, console.error)

        message.channel.send({ content: 'Waifu made using waifulabs.com',files: ["../ToD/ToD-waifu.png"]})

message.channel.stopTyping(true)
    }
}