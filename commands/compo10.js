const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const setting = client.emojis.cache.find(emoji => emoji.name === "setting");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Compo Th10__**`)
        .setColor('FFC0CB')
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp()
        .setThumbnail('https://cdn.discordapp.com/attachments/671075545072533545/711602661543116871/711252239343419457.png')
        .setDescription(`_${setting} Voici les meilleurs compositions d'attaque th10 ._`)
        .addField('__AQH mineurs :__', [
            `=> 4 guérisseuses
             => 27 mineurs
             => 5 boulistes
             => 1 - 2 bébés dragons
             => 5 sapeurs
             => Sorts : 3 rages, 2 soins, 2 poisons`
        ])
        .addField('__AQH GOWIVAHOG :__', [
            `=> 4 guérisseuses
             =>  11 valkyries
             => 1 golem
             => 6 sorciers
             => 5 chevaucheurs de cochons
             => 5 boulistes
             => 5 sapeurs
             => Sorts : 3 rages, 2 sauts et 2 poisons`
        ])
        .addField('__AQH MOBAL :__', [
            `=> 4 guérisseuses
             => 2 molosses
             => 20 ballons
             => 5 - 8 sapeurs
             => sorts : 2 rages - 3 précipitations - 1 saut - 1 gel ou soin - 1 poison
             => Troupes de déblayage : archers, gargouilles, boulistes`
        ])
        .addField('__HOLO :__', [
            `=> 30 chevaucheurs de cochons
             => 14 ballons
             => 7 sorciers
             => Sorts : 3 soins, 1 rage, 1 gel, 2 poisons`
        ])
        .addField('__MOBA :__', [
            `=> 4 molosses
             => 22 ballons
             => Sorts : 4 rages ou 8 rapidités, 1gel, 2 poisons`
        ])
        .addField('__GOBOMOBAL :__', [
            `=> 1 golem
             => 3 molosses
             => 16 ballons
             => 5 boulistes
             => 4 sorciers
             => 2 bébés dragons
             => 2 gargouilles
             => Sorts : 2 rages - 3 précipitations - 1 saut - 1 gel - 1 poison`
        ]))
    },
    name: 'compo-10'
}