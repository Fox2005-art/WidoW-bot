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
        .setThumbnail('https://images-ext-2.discordapp.net/external/qJ5sJ-9Gha_jnh1cGnHX3gBycBzn5J5VdqBoEEJMoxg/%3Fv%3D1/https/cdn.discordapp.com/emojis/711246843131986000.png?width=71&height=80')
        .setDescription(`__**Hotel de Ville | Level 12**__`)
        .addField(`${canon}__Defensive Building__:`, [
            `Rempart \`(x300)\` : Level 13
            Canon \`(x7)\` : Level 17
            Tour d'Archers \`(x8)\` : Level 17
            Mortier \`(x4)\` : Level 12
            Défense Aérienne \`(x4)\` : Level 10
            Tour des Sorciers \`(x5)\` : Level 11
            Tesla Camouflée \`(x5)\` : Level 10
            Propulseurs d'Air \`(x2)\` : Level 7
            Tours à Bombes \`(x2)\` : Level 7
            Arc X \`(x4)\` : Level 6
            Tours Infernales \`(x3)\` : Level 6
            Aigle Atrilleur \`(x1)\` : Level 3`
        ])
        .addField(`${trap}__Pièges__:`, [
            `Piège à Ressort \`(x8)\` : Level 5
            Bombe \`(x6)\` : Level 8
            Bombe Géante \`(x6)\` : Level 5
            Bombes Aériennes \`(x6)\` : Level 6
            Mine chercheuse \`(x6)\` : Level 3
            Piège squelettique \`(x3)\` : Level 5
            Piège à tornade \`(x1)\` : Level 3`
        ])
        .addField(`${defence}__Armée__:`, [
            `Camp militaire \`(x4)\` : Level 10
            Laboratoire \`(x1)\` : Level 10
            Casernes \`(x4)\` : Level 14
            Casernes (Noir) \`(x2)\` : Level 8
            Usine des Sorts \`(x1)\` : Level 5
            Usine des Sorts (Noir) \`(x1)\` : Level 5
            Atelier \`(x1)\` : Level 3
            Rois des Barbares \`(x1)\` : Level 65
            Reines des Archers \`(x1)\` : Level 65
            Grand Sorcier \`(x1)\` : Level 40`
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
    name: 'th12-info'
}