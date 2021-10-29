module.exports = async (client, guild) => {
  try {
    client.db.delete(`prefix_${guild.id}`);
    client.db.delete(`nsfwEnabled_${guild.id}`);
    client.db.delete(`antiscamEnabled_${guild.id}`)
    client.db.delete(`mutedRole_${guild.id}`)

    require("colors");
    console.log(
      `
    Left guild ${guild.id}, data wipe has been successful.`.green
    );
  } catch (e) {
    console.log(`Looks like there has been an error wiping the data. - ${e}`.red);
  }
};
