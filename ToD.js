const Discord = require("discord.js"); const { Intents } = require('discord.js')
require('colors')
const fs = require("fs");
const mongoose = require('mongoose')
const path = require("path");
const chalk = require("chalk");
const { message } = require("statuses");
const db = require('quick.db');
const moment = require('moment')
const { Collection, MessageEmbed } = require("discord.js");
const ms = require("ms");
const Statcord = require('statcord.js')
const Timeout = new Collection();
const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "GUILD_MEMBER"],
  ws: { properties: { $browser: "Discord iOS" } },
  fetchAllMembers: true
});

mongoose.connect(process.env.MONGOSTRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.once("connected", () => {
	console.log("Connected to Database");
  client.login(process.env.TOKEN);
});
global.client = client
client.aliases = new Collection();
client.logger = require('./modules/logger')
client.default = require('./DefaultConfig.json')
client.commands = new Discord.Collection();
client.slashcmds = new Discord.Collection();
let errors = [];

const modules = fs.readdirSync("Commands").filter((file) => fs.statSync(path.join("Commands", file)).isDirectory());

modules.forEach((module) => {
  console.log(chalk.green(`Loading Module: ${module}`));

  const CMDFiles = fs
    .readdirSync(path.resolve(`Commands/${module}`))
    .filter((file) => !fs.statSync(path.resolve("Commands", module, file)).isDirectory())
    .filter((file) => {
      return file.endsWith(".js");
    });
  console.log(chalk.blueBright(`╭────────────────────┬──╮`));
  CMDFiles.forEach((CMD) => {
    try {
      const command = require(`./Commands/${module}/${CMD}`);
      const FittedCMDName = `${command.config.name}`.padEnd(20);
      console.log(chalk.blueBright(`│${FittedCMDName}│✅│\n├────────────────────┼──┤`));
      command.module = module;
      client.slashcmds.set(command.config.name, command);
    } catch (error) {
      const FittedCMDName = `${CMD}`.padEnd(20);
      console.log(chalk.blueBright(`│${FittedCMDName}│❌│\n├────────────────────┼──┤`));
      errors.push(error);
    }
  });
  console.log(chalk.blueBright(`╰────────────────────┴──╯`));
});
if (errors.length > 0) {
  console.log(errors);
  errors.forEach((err) => {
    console.log(chalk.red(err));
  });
}

fs.readdir("./Events", (err, files) => {
  if (err) return console.log(chalk.red(err));
  console.log(chalk.green("Events Handler"));
  console.log(chalk.blueBright(`╭────────────────────┬──╮`));
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./Events/${file}`);
    let evtName = file.split(".")[0];
    const FittedEVTName = `${evtName}`.padEnd(20);
    console.log(chalk.blueBright(`│${FittedEVTName}│✅│`));
    client.on(evtName, evt.bind(null, client));
  });
  console.log(chalk.blueBright(`╰────────────────────┴──╯`));
});
client.once('ready', () => {

  let cmdFiles = fs.readdirSync(`./slash`).filter(file => file.endsWith('.js'))
  cmdFiles.map(async file => {
    
    const command = require(`./slash/${file}`);
    if (command.global == true) {
      client.api.applications().commands.post({ data: {
        name: command.slash.name,
        description: command.slash.description,
        options: command.slash.commandOptions,
      }})
    }
    client.shard.broadcastEval(client => client.guilds.cache.size).then(async results => {
      // results.reduce((prev, val) => prev + val, 0).toLocaleString()
      client.slashcmds.set(command.slash.name, command);
      console.log(`Posting: `.yellow + `[ ${command.slash.name} from ${file} (${command.slash.global ? "global" : "guild"}) ]`)
    })
    let globCmds = await client.api.applications(client.user.id).commands.get()
    globCmds.map(element => {
      return console.log("Successfully Loaded: ".green + `[ ` + element.name + " (" + element.id + ")" + ` ]`)
    });
  })
})




