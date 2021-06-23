const Discord = require('discord.js')

module.exports = {
    name: 'avatar',
    category: 'fun',
    description: 'returns a users avatar',
    run: async (message, args) => {
        const { prefix, token } = require ('../config.json');
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle("WidoW - User Avatar")
            embed.setImage(message.author.displayAvatarURL())
            embed.setDescription(`_Avatar de ${message.author} :_`)
            embed.setColor("RANDOM")
            embed.setTimestamp()
            embed.setFooter('WidoW')
            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(`WidoW - User Avatar`)
            embed.setImage(user.displayAvatarURL())
            embed.setDescription(`_Avatar de ${user} :_`)
            embed.setColor('RANDOM')
            embed.setTimestamp()
            embed.setFooter('WidoW')
            return message.channel.send(embed)
        }
    }
}