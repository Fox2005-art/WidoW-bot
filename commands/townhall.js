const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const charge = client.emojis.cache.find(emoji => emoji.name === "charge");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Compositions d'attaque__**`)
        .setColor('FFC0CB')
        .setThumbnail('https://images-ext-2.discordapp.net/external/dBE4VzbjedwRzUqTRxMV9P10N5Kcs6aby-o3PqwTAfA/https/images-ext-1.discordapp.net/external/zEwN62rmx7zQ1ZRyagKOoKChkJs1J2hD2msBQy9ohrk/%253Fv%253D1/https/cdn.discordapp.com/emojis/393100509701210132.png?width=80&height=36')
        .setFooter(`Requested By ${message.author.username}`)
        .setDescription(`_${charge} Voici les information des hdv disponibles._`)
        .addField(`__TH Information__`, [
            `Information th9 ${arrow} \`w=th9-info\``,
            `Information th10 ${arrow} \`w=th10-info\``,
            `Information th11 ${arrow} \`w=th11-info\``,
            `Information th12 ${arrow} \`w=th12-info\``,
        ]))
    },
    name: 'townhall'
}