module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('Veuillez indiquer un nombre de messages à supprimer.')
        if (count < 1 || count > 101) return message.channel.send('Le nombre de message doit être compris entre 1 et 100.')
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`${message.author.username} à supprimé \`${size - 1} message\``).then(sent => sent.delete({timeout: 3e3}))
    },
    name: 'purge',
    guildOnly: true,
}