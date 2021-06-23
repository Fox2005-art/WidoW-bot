const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const setting = client.emojis.cache.find(emoji => emoji.name === "setting");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Help Pannel__**`)
        .setColor('FFC0CB')
        .setThumbnail('https://images-ext-1.discordapp.net/external/zEwN62rmx7zQ1ZRyagKOoKChkJs1J2hD2msBQy9ohrk/%3Fv%3D1/https/cdn.discordapp.com/emojis/393100509701210132.png')
        .setFooter(`Requested By ${message.author.username}`)
        .setDescription(`_${setting} Voici toutes les commandes Clash of Clans._`)
        .addField(`Voulez-vous trouvez une bonne compositions d'attaque?`, [
            `${arrow}\`w=compo\``
        ])
        .addField(`Information Clash`, [
            `${arrow}\`w=townhall\``
        ])
        .addField(`Voulez-vous train dans un clan training?`, [
            `${arrow}\`w=clan-train\`\n\nUne question? rejoint le __[Server-Support](https://discord.gg/yXN8xUaxjn)__`,
        ]))
    },
    name: 'help-coc'
}