const Discord = require('discord.js'),
    moment = require('moment')
 
module.exports = {
    run: (message, args, client) => {
        const arrow2 = client.emojis.cache.find(emoji => emoji.name === "arrow2");
        const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");
        const role = message.mentions.roles.first()
        if (!role) return message.channel.send('Veuillez mentionner le rôle dont vous voulez voir les infos.')
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('**__WidoW - Roles Information__**')
        .setColor('FFC0CB')
        .setDescription(`_${ayy}Voici les information du rôle :_`)
        .setFooter(`Requested By ${message.author.username}`)
        .addField('__General infomation__', [
            `**${arrow2} Rôle :** ${role}`,
            `**${arrow2} ID du Rôle :** \`${role.id}\``,
            `**${arrow2} Membres le ayant ce rôle :** \`${role.members.size}\``,
            '__**Other Information**__',
            `**${arrow2} Couleur :** \`${role.hexColor}\``,
            `**${arrow2} Date de création :** ${moment(role.createdAt).format('\`DD/MM/YYYY [at] HH:mm:ss\`')}`,
            `**${arrow2} Affiché séparément :** ${role.hoist ? '\`Yes\`' : '\`No\`'}`,
            `**${arrow2} Mentionnable :** ${role.mentionable ? '\`Yes\`' : '\`No\`'}`,
            `**${arrow2} Position du Rôle :** \`${role.position}\``,

    ]))
    },
    name: 'roleinfo'
}