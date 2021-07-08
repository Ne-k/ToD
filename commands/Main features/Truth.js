

const fetch = require('node-fetch')
const Discord = require('discord.js')

const {MessageButton } = require('discord-buttons')
require('discord-buttons')
module.exports = {
    config: {
        name: "truth",
        usage: "t;truth",
        description: "Sends a truth question from the game Truth or dare.",
    },
    run: async (client, message, args) => {
        
try {
    
    
if(client.db.fetch(`nsfwEnabled_${message.guild.id}`) == true) {
    fetch("https://summonjs.net/api/random-truth").then((res) => res.json()).then(async (data) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#eaecf3')
    .setTitle("Truth")
    
    .setDescription(Math.random() > 0.6 ? client.tod.nsfwTruth[Math.floor(Math.random() * client.tod.nsfwTruth.length)] : data.truth)

return message.channel.send(embed)
})
}

if(client.db.fetch(`nsfwEnabled_${message.guild.id}`) == null) {
    //-----------------
    await fetch("https://summonjs.net/api/random-truth").then((res) => res.json()).then(async (data) => {
        //get random number between 0 and the length of the array
        let random_footer = ["To add more truth responses, run the suggest command and input the truth you want to add.", ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        let result = Math.floor((Math.random() * random_footer.length));
//get random number between 0 and the length of the array


let embed = new Discord.MessageEmbed()
.setColor('#eaecf3')
.setTitle("Truth")
.setFooter(random_footer[result])
.setDescription(data.truth)
let btn1 = new MessageButton()
.setStyle('blurple') 
.setLabel('Information') 
.setID('ToD_Information') 
let btn2 = new MessageButton()
.setStyle('blurple') 
.setLabel('Rules') 
.setID('ToD_Rules') 



client.on('clickButton', async (button) => {
    if (button.id === 'ToD_Information') {
        await button.reply.send("What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.", true)
        
    }
    if (button.id === 'ToD_Rules') {
        await button.reply.send(`Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`, true)
        
    }
  });
return message.channel.send({ buttons: [btn1, btn2], embed: embed });
})

}
    //#eaecc3
} catch(e) {
    console.log(e)
    let random_footer = ["To add more truth responses, run the suggest command and input the truth you want to add.", ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
    let result = Math.floor((Math.random() * random_footer.length));
   
    let btn42 = new MessageButton()
    .setStyle('blurple') 
    .setLabel('Information') 
    .setID('ToD_Information') 
    let btn45 = new MessageButton()
    .setStyle('blurple') 
    .setLabel('Rules') 
    .setID('ToD_Rules') 
    /*
    let reloadbtn = new MessageButton()
    .setStyle('green') 
    .setLabel('🔄') 
    .setID('Reload') 
    */

    const { getColorFromURL } = require('color-thief-node');


const dominantColor = await getColorFromURL(message.author.avatarURL({format: 'png'}))

// Main
    return message.channel.send({buttons: [btn42, btn45], embed: new Discord.MessageEmbed().setFooter(random_footer[result]).setColor(dominantColor).setTitle("Truth").setDescription(client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)])}).then(m => {
        let random_footer = ["To add more truth responses, run the suggest command and input the truth you want to add.", ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
        let result = Math.floor((Math.random() * random_footer.length));

        client.on('clickButton', async (button) => {
           
            if (button.id === 'ToD_Information') {
                await button.reply.send("What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.", true)
                
            }
            if (button.id === 'ToD_Rules') {
                await button.reply.send(`Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`, true)
                
            }
            /*
            // 1st Reload
            if (button.id === 'Reload') {
                await m.delete()
                message.channel.startTyping()
                const dominantColor = await getColorFromURL(message.author.avatarURL({format: 'png'}))
                let information = new MessageButton()
    .setStyle('blurple') 
    .setLabel('Information') 
    .setID('ToD_Information') 
    let rules = new MessageButton()
    .setStyle('blurple') 
    .setLabel('Rules') 
    .setID('ToD_Rules')
    let reloadbtn = new MessageButton()
    .setStyle('green') 
    .setLabel('🔄') 
    .setID('Reload') 
              message.channel.send({ buttons: [information, rules, reloadbtn],embed: new Discord.MessageEmbed().setColor(dominantColor).setTitle("Truth").setFooter(random_footer[result]).setDescription(client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)])}).then(m => {
                client.on('clickButton', async (button) => {
                    if (button.id === 'ToD_Information') {
                        await button.reply.send("What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.", true)
                        
                    }
                    if (button.id === 'ToD_Rules') {
                        await button.reply.send(`Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`, true)
                        
                    }
                    // 2nd Reload
                    if (button.id === 'Reload') {
                        await m.delete()
                        message.channel.startTyping()
                        const dominantColor = await getColorFromURL(message.author.avatarURL({format: 'png'}))
                        let information = new MessageButton()
            .setStyle('blurple') 
            .setLabel('Information') 
            .setID('ToD_Information') 
            let rules = new MessageButton()
            .setStyle('blurple') 
            .setLabel('Rules') 
            .setID('ToD_Rules')
            
                      message.channel.send({ buttons: [information, rules],embed: new Discord.MessageEmbed().setColor(dominantColor).setTitle("Truth").setFooter(random_footer[result]).setDescription(client.tod.Truth[Math.floor(Math.random() * client.tod.Truth.length)])})
                      client.on('clickButton', async (button) => {
                        if (button.id === 'ToD_Information') {
                            await button.reply.send("What exactly is Truth or Dare?\n\nTruth or Dare is one of the greatest party games for taking casual get-togethers to the next level. It brings even the most boring events to life and adds a fun, personal, and intimate touch to social engagements with friends. It is, without a doubt, the iconic party game for any party or sleepover! What's the best thing about Truth or Dare? The opportunity to get to know the other = players on a more intimate level. And, of course, dare them to make a total fool of themselves. So don't wait any longer and begin this entertaining game to put your friends or family to the test! All you need is our app, which contains hundreds of amusing, personal, and adventurous questions and challenges.", true)
                            
                        }
                        if (button.id === 'ToD_Rules') {
                            await button.reply.send(`Players must either undertake the dare or answer the question truthfully. The answers must be unrelated to the game. After having the piece of paper read to them, players are not allowed to change their minds about picking "truth" or "dare." "Passing" is an option, but it comes with a penalty. A true pass earns a free dare. If you pass on a dare, you receive a free truth. In a current version of the game, the player is asked, 'Truth, Dare, Kiss, or Swear?' __But the rules can differ depending on who plays it and because this is Discord so you won't be able to do most things.__.`, true)
                            
                        }
                    })
                     
                      
                  }

                })
              })
              
              
              
          }
          */
        })
        
    })
    

    }


    }}
