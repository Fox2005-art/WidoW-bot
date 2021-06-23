const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Help Pannel__**`)
        .setDescription(`${ayy} _Pro Tip : Les commandes si-dessous n'ont pas de aliaseS donc écrivez les comme le sont-elle._`)
        .setColor('FFC0CB')
        .setThumbnail('https://cdn.discordapp.com/attachments/830379954759008257/856285941478850610/black-widow-vector-260nw-36109387.jpg')
        .addField('Clash of Clans Command', [
            `${arrow} Type commande \`w=help-coc\``
        ])
        .addField('Moderation Command', [
            `${arrow} Type commande \`w=help-moderation\``
        ])
        .addField('Information Command', [
            `${arrow} Type commande \`w=help-info\``
        ])
        .addField('Fun Command', [
            `${arrow} Type command \`w=help-fun\``
        ])
        .addField('Bot Command', [
            `${arrow} Type commande \`w=help-bot\`\n\nUne question? rejoint le __[Server-Support](https://discord.gg/yXN8xUaxjn)__`
        ])
        .setFooter(`Requested By ${message.author.username}`))
    },
    name: 'help'
}