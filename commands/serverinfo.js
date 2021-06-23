const Discord = require('discord.js'),
moment = require('moment')


module.exports = {
run: (message, args, client) => {
    const verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    const arrow = client.emojis.cache.find(emoji => emoji.name === "arrow");
    const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");
    const arrow2 = client.emojis.cache.find(emoji => emoji.name === "arrow2");
    message.channel.send(new Discord.MessageEmbed()
    .setFooter(`Requested By ${message.author.username}`)
    .setThumbnail(message.guild.iconURL())
    .setTitle('**__WidoW - Server Information__**')
    .setDescription(`${ayy} _Voici les information du serveur **${message.guild.name}**_`)
    .setColor('FFC0CB')
    .addField('__General Information :__', [
        `**${arrow} Nom du Serveur :** \`${message.guild.name}\``,
        `**${arrow} ID du Serveur :** \`${message.guild.id}\``,
        `**${arrow} Région du Serveur :** \`${message.guild.region}\``,
        `**${arrow} Membres du Serveur :** \`${message.guild.memberCount}\``,
        `**${arrow} Bot du Serveur :** \`${message.guild.members.cache.filter(member => member.user.bot).size}\``,
        '__**Other Information**__',
        `**${arrow} Salons du Serveur :** \`${message.guild.channels.cache.size}\``,
        `**${arrow} Emojis du Serveur :** \`${message.guild.emojis.cache.size}\`(\`${message.guild.emojis.cache.filter(emoji => !emoji.animated).size}\` emojis normal et \`${message.guild.emojis.cache.filter(emoji => emoji.animated).size}\` emojis animés)`,
        `**${arrow} Nombre de Rôles :** \`${message.guild.roles.cache.size}\``,
        `**${arrow} Propriétaire du Serveur :** ${message.guild.owner}`,
        `**${arrow} Date de création :** ${moment(message.guild.createdAt).format('\`DD/MM/YYYY [at] HH:mm:ss\`')}`,
        `**${arrow} Nombre de boosts :** \`${message.guild.premiumSubscriptionCount}\``,
    ]))
},
name: 'serverinfo'
}