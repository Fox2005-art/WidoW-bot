const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "chat",
    category: 'fun',
    help: {
        description: 'Voir des images de chats',
        syntax: '[]'
    },

    run: async (message, args) => {
        const url = "https://some-random-api.ml/img/cat";
        const facts = "https://some-random-api.ml/facts/cat"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setColor(`40369`)
            .setImage(image.link)
            .setFooter('FlyZ | Devlopped by FontoX')

        await message.channel.send(embed)
    }
}