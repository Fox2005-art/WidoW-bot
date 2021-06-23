const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "hug",
    category: 'fun',
    run: async (message, args) => {
        const url = 'https://some-random-api.ml/animu/hug';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${message.author.username} hugs ${message.mentions.users.first().username || message.mentions.members.first()} ❤️`)
            .setColor('f9648')
            .setImage(data.link)
            .setTimestamp()
            .setFooter(`Requested By ${message.author.username}`))
    }
}