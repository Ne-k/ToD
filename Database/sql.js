const Logger = require("../modules/logger");
const sql = require("sqlite3");
const database = new sql.Database("./tod.sqlite");

try {

    Logger(`Checking Database`, "database")
    Logger(`Initialized`, "database")

    const databaseInit = new Date();
    const tables = {
        blacklist: [
            "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
            "userID TEXT NOT NULL",
            "moderator TEXT NOT NULL",
            "reason TEXT NOT NULL"
        ],
        prefix: [
            "id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL",
            "prefix TEXT NOT NULL",
            "guildID TEXT NOT NULL"
        ],
    };

    for (let table in tables) {

        database.run(`CREATE TABLE ${table} (${tables[table].join(", ")})`, () => {
            const readyTime = new Date();
            const TimeTookToLoad = Math.floor((readyTime - databaseInit) / 1000);
            Logger(`Database Took` + ` ${TimeTookToLoad}` + ` second(s) to load table` + ` ${table}`, "database")
        });
    }

} catch (err) {
    throw new Error(err.stack)
}

module.exports = database;