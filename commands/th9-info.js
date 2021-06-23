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
        .setThumbnail('https://images-ext-1.discordapp.net/external/8aF7plOCrtOPzrdMHkwtKmlpZ5piM6pZJKjXwZt13s4/%3Fv%3D1/https/cdn.discordapp.com/emojis/711246912103383102.png?width=80&height=80')
        .setDescription(`__**Hotel de Ville | Level 9**__`)
        .addField(`${canon}__Defensive Building__:`, [
            `Rempart \`(x250)\` : Level 10
            Canon \`(x5)\` : Level 11
            Tour d'Archers \`(x6)\` : Level 11
            Mortier \`(x4)\` : Level 7
            Défense Aérienne \`(x4)\` : Level 7
            Tour des Sorciers \`(x4)\` : Level 7
            Tesla Camouflée \`(x4)\` : Level 7
            Propulseurs d'Air \`(x2)\` : Level 5
            Tours à Bombes \`(x1)\` : Level 3
            Arc X \`(x2)\` : Level 3`
        ])
        .addField(`${trap}__Pièges__:`, [
            `Piège à Ressort \`(x)\` : Level 4
            Bombe \`(x)\` : Level 6
            Bombe Géante \`(x)\` : Level 3
            Bombes Aériennes \`(x)\` : Level 4
            Mine chercheuse \`(x)\` : Level 2
            Piège squelettique \`(x)\` : Level 3`
        ])
        .addField(`${defence}__Armée__:`, [
            `Camp militaire \`(x4)\` : Level 7
            Laboratoire \`(x1)\` : Level 7
            Casernes \`(x4)\` : Level 11
            Casernes (Noir) \`(x2)\` : Level 6
            Usine des Sorts \`(x1)\` : Level 4
            Usine des Sorts (Noir) \`(x1)\` : Level 4
            Rois des Barbares \`(x1)\` : Level 30
            Reines des Archers \`(x1)\` : Level 30`
        ])
        .addField(`${ressource}__Ressources Building__:`, [
            `Resérvoire d'Or \`(x4)\` : Level 11
            Réservoire d'Elixir \`(x4)\` : Level 11
            Réservoire d'Elexir (Noir) \`(x1)\` : Level 6
            Mine d'Or \`(x7)\` : Level 12
            Extracteur d'Elexir \`(x7)\` : Level 12
            Foreuse d'Elexir Noir \`(x3)\` : Level 6`
        ]))
    },
    name: 'th9-info'
}