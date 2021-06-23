const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "meme",
    category: 'fun',
    run: async (message, args) => {
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`**FlyZ - Meme** `)
            .setDescription(data.caption)
            .setColor('FF0P0')
            .setImage(data.image)

        await message.channel.send(embed)
    }
}