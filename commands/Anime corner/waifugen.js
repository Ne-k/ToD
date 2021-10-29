module.exports = {
  config: {
    name: "waifugen",
    usage: "waifugen",
    description: "Waifu generator using waifu labs/",
  },
  run: async (bot, message, args) => {
    const waifulabs = require("waifulabs");
    const waifus = await waifulabs.generateWaifus();
    const waifu = waifus[0];
    const imageData = waifu.image;
    const image = Buffer.from(imageData, "base64");
    const fs = require("fs");
    fs.writeFile("waifu.png", image, console.error);

    message.channel.send({
      content: "Waifu made using waifulabs.com",
      files: ["../ToD/waifu.png"],
    });
  },
};
