module.exports = {
    run: async (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('** Erreur - Veuillez indiquer un mot.**')
       message.channel.send(question)
    
    },
    name: 'say',
    category: 'fun',
    help: {
        description: 'Cette commande permet d\'ecrire à travers le bot.',
        syntax: '[Mot]'
    }
}

