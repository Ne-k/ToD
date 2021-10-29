const colors = require("colors");

module.exports = function(logMessage, type = "info") {

    let logString;
    let logFormatting;

    switch (type) {
        case "gateway":
            logString = colors.white(logMessage)
            logFormatting = colors.bgGreen(colors.white(colors.bold("[ GATEWAY ]")));
            break;
        case "command":
            logString = colors.white(logMessage)
            logFormatting = colors.bgGreen(colors.white(colors.bold("[ COMMAND ]")));
            break;
        case "statsPosted":
            logString = colors.white(logMessage)
            logFormatting = colors.bgGreen(colors.white(colors.bold("[ STATS POSTED ]")));
            break;
        case "event":
            logString = colors.white(logMessage)
            logFormatting = colors.bgGreen(colors.white(colors.bold("[ EVENTS ]")));
            break;
            case "blacklist":
            logString = colors.white(logMessage)
            logFormatting = colors.bgRed(colors.white(colors.bold("[ BLACKLISTED USER ]")));
            break;
            case "StatcordSuccess":
            logString = colors.white(logMessage)
            logFormatting = colors.bgGreen(colors.white(colors.bold("[ STATCORD ]")));
            break;
            case "StatcordError":
            logString = colors.white(logMessage)
            logFormatting = colors.bgRed(colors.white(colors.bold("[ STATCORD ERROR ]")));
            break;
        case "database":
            logString = colors.white(logMessage)
            logFormatting = colors.bgBlue(colors.white(colors.bold("[ DATABASE ]")));
            break;
        case "guildCreate":
            logString = colors.white(logMessage)
            logFormatting = colors.bgGreen(colors.white(colors.bold("[ GUILD JOINED ]")));
            break;
        case "guildDelete":
            logString = colors.white(logMessage)
            logFormatting = colors.bgYellow(colors.white(colors.bold("[ GUILD LEAVE ]")));
            break;
        case "error":
            logString = colors.white(logMessage)
            logFormatting = colors.bgRed(colors.white(colors.bold("[ ERROR ]")));
            break;
        case "dbError":
            logString = colors.white(logMessage)
            logFormatting = colors.bgRed(colors.white(colors.bold("[ DATABASE ERROR ]")));
            break;
        case "warn":
            logString = colors.white(logMessage)
            logFormatting = colors.bgYellow(colors.white(colors.bold("[ WARN ]")));
            break;
            case "buttonClick":
                logString = colors.white(logMessage)
                logFormatting = colors.bgBlue(colors.white(colors.bold("[ BUTTON CLICK ]")));
                break;
            case "command error":
            logString = colors.white(logMessage)
            logFormatting = colors.bgRed(colors.white(colors.bold("[ COMMAND ERROR ]")));
            break;
    }
    console.log(logFormatting, logString);
}