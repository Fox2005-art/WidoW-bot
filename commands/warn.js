const Discord = require('discord.js')
const fs = require('fs')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande.**')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setColor('FFC000')
        .setTimestamp()
        .setDescription('Incorrect usage command.\n\n**Usage :** \n\`w=warn\` @User\n\`w=warn\` @User <reason>\n\n**Permissions :**\n \`Ban Members\`')
        .setFooter(`${message.author.username}`))
        if (member.id === message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas warn le propriétaire du serveur.**')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas warn ce membre.')
        const reason = args.slice(1).join(' ')
        if (!reason) return message.channel.send('**Veuillez indiquer une raison.**')
        if (!client.db.warns[member.id]) client.db.warns[member.id] = []
        client.db.warns[member.id].unshift({
            reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('⚠️ Warn')
        .setColor('FF00CE')
        .setTimestamp()
        .setDescription(`**${member} a été warn avec succès.**\n\n**Raison :** \`${reason}\``))
    },
    name: 'warn',
    guildOnly: true,
    help: {
        description: 'Cette commande permet de donner un avertissement(warn) a un membre de votre serveur.',
        syntax: '[Membre à warn]'
    }

}