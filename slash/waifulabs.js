module.exports = {
  slash: {
    name: "waifulabs",
    c: "Anime",
    description: "Randomly creates a waifu from waifulabs.com",
    commandOptions: null,
  },
  global: true,

  async execute(interaction, int) {
    if (!int.isCommand()) return;
    const waifulabs = require("waifulabs");
    const waifus = await waifulabs.generateWaifus();
    const waifu = waifus[0];
    const imageData = waifu.image;
    const image = Buffer.from(imageData, "base64");
    const fs = require("fs");
    fs.writeFile("waifu.png", image, console.error);

    return await int.reply({
      content: "Waifu made using waifulabs.com",
      files: ["/root/root/ToD/waifu.png"],
    });
  },
};
