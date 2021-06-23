const Discord = require('discord.js') 
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'giverole',
    help: {
        description: 'Cette commande permet de donner un role a un membre',
        syntax: '[<@Username "Id du role">]'
    },
    run: async (message, args) => {

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`You do not have MANAGE_ROLES permission`)

        if (!args[0] || !args[1]) return message.channel.send(new Discord.MessageEmbed()
        .setColor('FFC00P')
        .setTimestamp()
        .setDescription('Incorrect usage command.\n\n**Usage :** \n\`w=giverole\` @User @rolename\n\n**Permissions :**\n \`MANAGE_ROLES\`')
        .setFooter(`${message.author.username}`))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('User already has that role')

             const embed = new MessageEmbed()
                 .setDescription(`${message.author} a donné le role ${roleName} à ${member.user}`)
                 .setColor('f3f3f3')
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('Ce role n\'éxiste pas .')
        }
    }
}

        
