const Discord = require('discord.js')

module.exports = {
    run: (message, args, client) => {
        const clef = client.emojis.cache.find(emoji => emoji.name === "clef");
        const discord = client.emojis.cache.find(emoji => emoji.name === "discord");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**__WidoW - Support Server__**')
        .setDescription(`${discord} __**[Discord Server](https://discord.gg/yXN8xUaxjn)**__`)
        .addField(`Un problème avec WidoW ?`, [
            `${clef} Rejoinds le serveur discord et déclare-le!`
        ])
        .setThumbnail('https://cdn.discordapp.com/attachments/830379954759008257/834047550603657216/images-removebg-preview_1.png')
        .setColor('008000')
        .setFooter('WidoW Bot', 'https://cdn.discordapp.com/attachments/830379954759008257/834047550603657216/images-removebg-preview_1.png'))
},
    name: 'support',
    category: 'information'
}