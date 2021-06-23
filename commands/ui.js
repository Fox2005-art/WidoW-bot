const Discord = require('discord.js'),
moment = require('moment')
 
module.exports = {
    run: async (message, args, client) => {
        const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");
        const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
        const member = message.mentions.members.first() || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(`Requested By ${message.author.username}`)
        .setTitle('**__WidoW - User Information__**')
        .setDescription(` ${ayy} _Voici les informations du Compte ${member} :_`)
        .addField('__Genral Information__', [
            `**${arrow} Nom du compte:** \`${(member.user.tag)}\``,
            `**${arrow} ID du compte :**   \`${member.id} \``,
            `**${arrow} Date de création du compte :** ${moment(member.user.createdAt).format('\`DD/MM/YYYY [at] HH:mm:ss\`')}`,
            `**${arrow} Date d\'arrivée sur le serveur :** ${moment(member.joinedAt).format('\`DD/MM/YYYY [at] HH:mm:ss\`')}`,
        ]))
    },
    name: 'ui'
}