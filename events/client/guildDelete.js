module.exports = async (client, guild) => {
    client.db.delete(`prefix_${guild.id}`)
    client.db.delete(`nsfwEnabled_${guild.id}`)
    }