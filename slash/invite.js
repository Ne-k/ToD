module.exports = {
  slash: {
    name: 'invite',
    description: 'Get my invite link.',
    commandOptions: null,
  },
    global: true,

    async execute(interaction, int, client) {
      if (!int.isCommand()) return;
        const { MessageEmbed } = require('discord.js')
        const { link } = await require('node-fetch')(`https://purrbot.site/api/img/sfw/neko/gif`).then(res => res.json())
       

        let Sembed = new MessageEmbed()
            .setColor('RANDOM')
            .setDescription('**[Click here to invite ToD bot](https://discord.com/oauth2/authorize?client_id=752306970467237970&scope=bot+applications.commands&permissions=6508891968)**\n\n**[Website](https://tod.nek.wtf)** **|** **[Ko-Fi Link](https://ko-fi.com/nekwastaken)** **|** **[Support Server](https://discord.gg/PVC35NbeTD)**')
            .setImage(link)

            int.reply({
                "components": [
                    {
                    "type": 1,
                    "components": [
                      {
                        type: 2,
                        label: "Invite ToD", 
                        style: 5, 
                        url: 'https://discord.com/oauth2/authorize?client_id=752306970467237970&scope=bot+applications.commands&permissions=6508891968'
                      }
                    ]
                   
                    }
                    ],
                    embeds: [Sembed]
            })

    }
}