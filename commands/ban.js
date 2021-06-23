const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setColor('FFC000')
        .setTimestamp()
        .setDescription('Incorrect usage command.\n\n**Usage :** \n\`w=ban\` @User\n\`w=ban\` @User <reason>\n\n**Permissions :**\n \`Ban Members\`')
        .setFooter(`${message.author.username}`))
        if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas bannir le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous n\'avez pas les permissions pour bannir ce membre.')
        if (!member.bannable) return message.channel.send('Le bot a pas les permissions pour bannir ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} **a été banni avec succès!**`)
    },
    name: 'ban',
    guildOnly: true,
    help: {
        description: 'Cette commande permet de ban un membre ou un bot difinitivement',
        syntax: '[Membre a Ban]'
    }
}