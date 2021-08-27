module.exports = (client) => {
  console.log(`Logged into ${client.user.tag}`)
  process.on('unhandledRejection', (error) => {
    console.log(error)
})
}