module.exports = {
    config: {
        name: "waifugen",
        usage: "waifugen",
        description: "Waifu generator using waifu labs/",
    },
    run: async (bot, message, args) => {
   message.channel.startTyping()
        const waifulabs = require('waifulabs');

        // Get some pretty waifus
        const waifus = await waifulabs.generateWaifus();
    
        // Extract one waifu
        const waifu = waifus[0];
    
        // Extract the image of the waifu
        const imageData = waifu.image;
    
        // Turn the Base64 image into a Buffer
        const image = Buffer.from(imageData, 'base64');
    
        // Use FS module and write the image to a file
        const fs = require('fs');
        fs.writeFile('ToD-waifu.png', image, console.error)

        message.channel.send('Waifu made using waifulabs.com', {files: ["../ToD/ToD-waifu.png"]})

message.channel.stopTyping(true)
    }
}