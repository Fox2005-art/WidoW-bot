const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        const replies = [":fist:-Pierre", ":raised_hand_with_fingers_splayed:-Papier", ":v:-Ciseaux"];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        const question = args.join(' ')
        if (!question) return message.channel.send('**Veuillez indiquer une réponse.**')

        message.channel.send(`${reply}`)
    },
    name: 'rps',
    category: 'fun',
    help: {
        description: 'Commande Pierre Papier Ciseaux.',
        syntax: '[Réponse]'
    }

}