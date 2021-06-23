const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const setting = client.emojis.cache.find(emoji => emoji.name === "setting");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Compo Th9__**`)
        .setColor('FFC0CB')
        .setFooter(`Requested By ${message.author.username}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/671075545072533545/711603054541144145/711246912103383102.png')
        .setDescription(`_${setting} Voici les meilleurs compositions d'attaque th9 ._`)
        .addField('__GIHEBOVA :__', [
            `=> 12 Géants
             => 4 guérisseuses (sur géants)
             => 7 sorciers
             => 9 valkyries
             => 5 boulistes (dans le château de clan)
             => Sorts : 2 rages, 2 soins, 2 poisons`
        ])
        .addField('__AQH GOVABO :__', [
            `=> Reine nv 10 au minimum
             => 1 golem
             => 4 guérisseuses
             => 11 sorciers
             => 10 valkyries
             => 5 sapeurs
             => 5 boulistes (dans le château de clan)
             => Sorts : 2 soins, 1 rage, 1 saut avec 2 poisons ou 4 sismiques`
        ])
        .addField('__AQH BB DRAG GOWIVA :__', [
            `=> Reine nv 10 au minimum
             => 1 golem
             => 4 guérisseuses
             => 7 sorciers
             => 6 valkyries
             => 4 sapeurs
             => 8 bébé dragons
             => Sorts : 2 rages, 1 soin, 1 saut avec 2 poisons`
        ])
        .addField('__Full Dragons :__', [
            `=> 10 dragons
             => Sorts : 3 rage, 1 soin, 2 rapidités`
        ])
        .addField('__Full Cochons :__', [
            `=> 44 chevaucheurs de cochons
             => Sorts : 4 soins, 2 poisons`
        ])
        .addField('__GOMOBAL :__', [
            `=> 2 golems
             => 3 molosses
             => 15 ballons
             => 6 sorciers
             => Sorts : 1 rage, 1 saut, 4 rapidités, 2 poisons`
        ])
        .addField('__QUEEN WALK GOWIHOG :__', [
            `=> 2 golems
             => 4 guérisseuses
             => 16 chevaucheurs de cochons
             => 10 sorciers
             => 4 sapeurs
             => Sorts : 2 soins, 1 rage, 1 saut, 2 poisons`
        ])
        .addField('__COMPO HYBRIDE :__', [
            `=> 2 golems
             => 5 sorciers
             => 16 ballons
             => 3 molosses de lave
             => Sorts : 1 saut, 3 rages, 2 rapidités`
        ]))
    },
    name: 'compo-9'
}