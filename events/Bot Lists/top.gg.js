require('dotenv').config()
require("@colors/colors")

module.exports = async(client) => {
    const { AutoPoster } = require('topgg-autoposter')
    const poster = AutoPoster(process.env.TOPGGTOKEN, client)

    poster.on('posted', () => {
        console.log("[ Top.gg ] ".green + "Posted server count to Top.gg")
    })
}