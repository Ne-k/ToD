const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  slash: {
    name: 'dare',
    description: 'Sends a dare question from the game Truth or dare.',
    commandOptions: null,
    global: true,
  },
	async execute(interaction, int, client) {

        fetch("https://casey.gg/api/random-dare").then((res) => res.json()).then(async (data) => {
            let embed = new Discord.MessageEmbed()
            .setColor('#eaecf3')
            .setTitle("Dare")
            .setDescription(data.dare)
	
       
		int.reply({
                embeds: [embed],
                "components": [
                    {
                    "type": 1,
                    "components": [
                      {
                        "type": 2,
                        "label": "Information", 
                        "style": 1, 
                        "custom_id": 'ToD_Information'
                      },
                      {
                          "type": 2, 
                          "label": "Rules", 
                          "style": 1, 
                          "custom_id": "ToD_Rules"
                      }
                    ]
                   
                    }
                    ]
                  
		})

    client.on('interactionCreate', async (int) => {

     
      if (int.customId == 'ToD_Information') {
        await int.reply({content: `What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.`, ephemeral: true})
        
    }
    if (int.customId == 'ToD_Rules') {
        await int.reply({content: `Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`, ephemeral: true})
        
    }


  });

	})
	},
};