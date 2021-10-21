module.exports = async (client, guild) => {
  try {
    client.db.delete(`prefix_${guild.id}`);
    client.db.delete(`nsfwEnabled_${guild.id}`);
    client.db.delete(`antiscamEnabled_${guild.id}`)
    client.db.delete(`mutedRole_${message.guild.id}`)

    require("colors");
    console.log(
      `
    Left a guild, data wipe has been successful.`.green
    );
  } catch (e) {
    console.log(
      `
        Looks like there has been an error wiping the data. - ${e}`.red
    );
  }
};
