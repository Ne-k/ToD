module.exports = async (bot, id, unavailableGuilds) => {
    bot.shardId = id; // Make sure we can get the current shard ID
  };