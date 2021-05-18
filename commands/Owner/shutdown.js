//get ownerid from botconfig file

module.exports = {
    config: {
        name: "shutdown",
        aliases: ["stop", "exit", "rm-rf", "die"]
    },
    run: async (bot, message, args) => {
        if (message.author.id != '750510159289254008') return message.channel.send("The command you are trying to use is not available.");   
        
        try {
            await message.channel.send("~Shuting down~");
            process.exit();
        } catch (e) {
            return message.channel.send(`ERROR: ${e.message}`);
        }
    }
}


