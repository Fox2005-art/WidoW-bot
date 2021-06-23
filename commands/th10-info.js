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
        .setThumbnail('https://images-ext-1.discordapp.net/external/YvDWiqEgMS2r6gf_8hXun_fUn32mLL-lnDjIDapi7Zo/%3Fv%3D1/https/cdn.discordapp.com/emojis/711252239343419457.png?width=80&height=80')
        .setDescription(`__**Hotel de Ville | Level 10**__`)
        .addField(`${canon}__Defensive Building__:`, [
            `Rempart \`(x275)\` : Level 11
            Canon \`(x6)\` : Level 13
            Tour d'Archers \`(x7)\` : Level 11
            Mortier \`(x4)\` : Level 8
            Défense Aérienne \`(x4)\` : Level 8
            Tour des Sorciers \`(x4)\` : Level 9
            Tesla Camouflée \`(x4)\` : Level 8
            Propulseurs d'Air \`(x2)\` : Level 6
            Tours à Bombes \`(x2)\` : Level 4
            Arc X \`(x3)\` : Level 4
            Tours Infernales \`(x2)\` : Level 3`
        ])
        .addField(`${trap}__Pièges__:`, [
            `Piège à Ressort \`(x6)\` : Level 5
            Bombe \`(x6)\` : Level 7
            Bombe Géante \`(x5)\` : Level 4
            Bombes Aériennes \`(x5)\` : Level 4
            Mine chercheuse \`(x5)\` : Level 3
            Piège squelettique \`(x3)\` : Level 4`
        ])
        .addField(`${defence}__Armée__:`, [
            `Camp militaire \`(x4)\` : Level 8
            Laboratoire \`(x1)\` : Level 8
            Casernes \`(x4)\` : Level 12
            Casernes (Noir) \`(x2)\` : Level 7
            Usine des Sorts \`(x1)\` : Level 5
            Usine des Sorts (Noir) \`(x1)\` : Level 5
            Rois des Barbares \`(x1)\` : Level 40
            Reines des Archers \`(x1)\` : Level 40`
        ])
        .addField(`${ressource}__Ressources Building__:`, [
            `Resérvoire d'Or \`(x4)\` : Level 11
            Réservoire d'Elixir \`(x4)\` : Level 11
            Réservoire d'Elexir (Noir) \`(x1)\` : Level 6
            Mine d'Or \`(x7)\` : Level 13
            Extracteur d'Elexir \`(x7)\` : Level 13
            Foreuse d'Elexir Noir \`(x3)\` : Level 7`
        ]))
    },
    name: 'th10-info'
}