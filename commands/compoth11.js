const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const setting = client.emojis.cache.find(emoji => emoji.name === "setting");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Compo Th11__**`)
        .setColor('FFC0CB')
        .setFooter(`Requested By ${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/671075545072533545/711603082261430282/711246868147077230.png')
        .setDescription(`_${setting} Voici les meilleurs compositions d'attaque th11 ._`)
        .addField(`BOMOBAL :`, [
            `3 molosses \n 23 ballons\n 1 bébé dragon\n 5 boulistes\n 5 sapeurs\n Sorts : 4 précipitations, 2 rages, 1 saut, 1 gel et 1 poison`
        ])
        .addField('AQH MOBAL :', [
            `5 guérisseuses
            2 molosses
            22 ballons
            1 bébé dragons
            8 gargouilles
            Sorts : 5 rages, 2 précipitations et 1 poison`
        ])
        .addField('AQH COCHONS :', [
            `5 guérisseuses.
            27 chevaucheurs de cochon.
            4 sorciers.
            8 sapeurs.
            Sorts : 3 rages - 2 soins - 1 saut - 1 poison.`
        ])
        .addField('BOWITCH :', [
            `20 boulistes
            10 sorcières
            1 golem
            Sorts : 3 rages, 2 sauts, 1 soin et 1 poison`
        ])
        .addField('AQH BOWICH :', [
            `5 guérisseuses
            14 boulistes
            5 sorcières
            1 golem
            1 bébé dragon
            Sorts : 4 rages, 2 sauts et 1 poison`
        ]))
    },
    name: 'compo-11'
}