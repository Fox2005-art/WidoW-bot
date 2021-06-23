const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const setting = client.emojis.cache.find(emoji => emoji.name === "setting");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        const th13 = client.emojis.cache.find(emoji => emoji.name === "th13");
        const th12 = client.emojis.cache.find(emoji => emoji.name === "th12");
        const th11 = client.emojis.cache.find(emoji => emoji.name === "th11");
        const th10 = client.emojis.cache.find(emoji => emoji.name === "th10");
        const th9 = client.emojis.cache.find(emoji => emoji.name === "th9");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Training Clans__**`)
        .setColor('FFC0CB')
        .setFooter(`Requested By ${message.author.username}`)
        .setThumbnail('https://media.discordapp.net/attachments/830379954759008257/834825188800856104/telechargement_5-removebg-preview.png')
        .setDescription(`_${setting} Voici la liste des clans training :_`)
        .addField(`${th13} Clan Hdv13`, [
            `${arrow} Nom du clan : \`フレチャ69部屋\``,
            `${arrow} Id : \`#JVLLCG2J\``,
            `${arrow} [Lien du Clan](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=JVLLCG2J)`
        ])
        .addField(`${th12} Clan Hdv12`, [
            `${arrow} Nom du clan : \`Th12 Fc clan\``,
            `${arrow} Id : \`#2Y0CVPJJ9\``,
            `${arrow} [Lien du Clan](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=2Y0CVPJJ9)`
        ])
        .addField(`${th11} Clan Hdv11`, [
            `${arrow} Nom du clan : \`フレチャth11【元】\``,
            `${arrow} Id : \`#22GV8JGVU\``,
            `${arrow} [Lien du Clan](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=22GV8JGVU)`
        ])
        .addField(`${th10} Clan Hdv10`, [
            `${arrow} Nom du clan : \`フレチャth10【真】\``,
            `${arrow} Id : \`#CJP22J8Q\``,
            `${arrow} [Lien du Clan](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=CJP22J8Q)`
        ])
        .addField(`${th9} Clan Hdv9`, [
            `${arrow} Nom du clan : \`大黒屋 フレチャth9専用\``,
            `${arrow} Id : \`#L2RJ2LP9\``,
            `${arrow} [Lien du Clan](https://link.clashofclans.com/fr?action=OpenClanProfile&tag=L2RJ2LP9)`
        ]))
    },
    name: 'clan-train'
}