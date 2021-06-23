const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const charge = client.emojis.cache.find(emoji => emoji.name === "charge");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Compositions d'attaque__**`)
        .setColor('FFC0CB')
        .setThumbnail('https://images-ext-1.discordapp.net/external/zEwN62rmx7zQ1ZRyagKOoKChkJs1J2hD2msBQy9ohrk/%3Fv%3D1/https/cdn.discordapp.com/emojis/393100509701210132.png')
        .setFooter(`Requested By ${message.author.username}`)
        .setDescription(`_${charge} Voici les différentes compositions d'attaque._`)
        .addField(`Village Principale`, [
            `Compo th9 ${arrow} \`w=compo-9\``,
            `Compo th10 ${arrow} \`w=compo-10\``,
            `Compo th11 ${arrow} \`w=compo-11\``,
        ]))
    },
    name: 'compo'
}