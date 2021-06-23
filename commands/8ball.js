const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment', 'Tais-Toi', 'Humm', 'C\'est clair', 'Jamais']
 
module.exports = {
    run: (message, args, client) => {
        const fortune = client.emojis.cache.find(emoji => emoji.name === "fortune");
        const question = args.join(' ')
        if (!question) return message.channel.send('**Veuillez indiquer une question.**')
        message.channel.send(`**${fortune} ${message.author.username}**, ${(replies[Math.floor(Math.random() * replies.length)])}`)
    },
    name: '8ball',
    category: 'fun',
}