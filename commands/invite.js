const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const Pong = client.emojis.cache.find(emoji => emoji.name === "Pong");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**__WidoW - Link of Invitation__**')
        .setDescription(`${Pong} **Pour inviter WidoW dans votre serveur**:\n __**[cliquez ici](https://discord.com/api/oauth2/authorize?client_id=822877106501058561&permissions=0&scope=bot)**__`)
        .setColor('403039'))
},
    name: 'invite',
    category: 'information'
}