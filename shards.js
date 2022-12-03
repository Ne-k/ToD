const { ShardingManager } = require('discord.js');
require('dotenv').config();
require("@colors/colors")

const manager = new ShardingManager('./index.js', { token: process.env.TOKEN });
manager.spawn()