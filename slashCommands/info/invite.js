const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'invite',
	description: "Get the bot's invite link",
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
	category: "info",
	userPerms: [],
	botPerms: [],
	run: async (client, interaction) => {
		const inviteUrl = `https://discord.com/oauth2/authorize?client_id=943187676549513236&scope=bot+applications.commands&permissions=1531427810624`;
		const embed = new EmbedBuilder()
		.setTitle('Invite')
		.setDescription(`Here, you can invite me to your server with [this link](${inviteUrl})`)
		.setColor('#03fcdb')
		.setTimestamp()
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter({ text: client.user.tag })

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Invite')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
		return interaction.reply({ embeds: [embed], components: [actionRow] })
	}
};
