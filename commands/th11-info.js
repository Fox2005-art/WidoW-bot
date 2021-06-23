const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const canon = client.emojis.cache.find(emoji => emoji.name === "canon");
        const defence = client.emojis.cache.find(emoji => emoji.name === "defence");
        const ressource = client.emojis.cache.find(emoji => emoji.name === "ressource");
        const trap = client.emojis.cache.find(emoji => emoji.name === "trap");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Build Th Information__**`)
        .setColor('RANDOM')
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp()
        .setThumbnail('https://images-ext-2.discordapp.net/external/98RCqoW_mS9UJQyaTXQ2jgEdWRmEBWAqWmwNXkUL6vY/%3Fv%3D1/https/cdn.discordapp.com/emojis/711246868147077230.png?width=70&height=80')
        .setDescription(`__**Hotel de Ville | Level 11**__`)
        .addField(`${canon}__Defensive Building__:`, [
            `Rempart \`(x300)\` : Level 12
            Canon \`(x7)\` : Level 15
            Tour d'Archers \`(x8)\` : Level 15
            Mortier \`(x4)\` : Level 10
            Défense Aérienne \`(x4)\` : Level 9
            Tour des Sorciers \`(x5)\` : Level 10
            Tesla Camouflée \`(x4)\` : Level 9
            Propulseurs d'Air \`(x2)\` : Level 7
            Tours à Bombes \`(x2)\` : Level 6
            Arc X \`(x4)\` : Level 5
            Tours Infernales \`(x2)\` : Level 5
            Aigle Atrilleur \`(x1)\` : Level 2`
        ])
        .addField(`${trap}__Pièges__:`, [
            `Piège à Ressort \`(x6)\` : Level 5
            Bombe \`(x5)\` : Level 8
            Bombe Géante \`(x5)\` : Level 5
            Bombes Aériennes \`(x5)\` : Level 5
            Mine chercheuse \`(x5)\` : Level 3
            Piège squelettique \`(x3)\` : Level 4
            Piège à tornade \`(x1)\` : Level 2`
        ])
        .addField(`${defence}__Armée__:`, [
            `Camp militaire \`(x4)\` : Level 9
            Laboratoire \`(x1)\` : Level 9
            Casernes \`(x4)\` : Level 13
            Casernes (Noir) \`(x2)\` : Level 8
            Usine des Sorts \`(x1)\` : Level 5
            Usine des Sorts (Noir) \`(x1)\` : Level 5
            Rois des Barbares \`(x1)\` : Level 50
            Reines des Archers \`(x1)\` : Level 50
            Grand Sorcier \`(x1)\` : Level 20`
        ])
        .addField(`${ressource}__Ressources Building__:`, [
            `Resérvoire d'Or \`(x4)\` : Level 13
            Réservoire d'Elixir \`(x4)\` : Level 13
            Réservoire d'Elexir (Noir) \`(x1)\` : Level 7
            Mine d'Or \`(x7)\` : Level 14
            Extracteur d'Elexir \`(x7)\` : Level 14
            Foreuse d'Elexir Noir \`(x3)\` : Level 8`
        ]))
    },
    name: 'th11-info'
}