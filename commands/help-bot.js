const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const setting = client.emojis.cache.find(emoji => emoji.name === "setting");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Help Pannel__**`)
        .setColor('FFC0CB')
        .setFooter(`Requested By ${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/830379954759008257/834093386255302706/istockphoto-1058511408-1024x1024-removebg-preview.png')
        .setDescription(`_${setting} Voici toutes les commandes d'information du bot._`)
        .addField(`Commandes d'information du bot`, [
            `${arrow} \`w=invite\`, \`w=ping\`, \`w=support\`\n\nUne question? rejoint le __[Server-Support](https://discord.gg/yXN8xUaxjn)__`,
        ]))
    },
    name: 'help-bot'
}