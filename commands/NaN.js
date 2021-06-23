const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        const bot = client.emojis.cache.find(emoji => emoji.name === "bot");
        const custo = client.emojis.cache.find(emoji => emoji.name === "custo");
        const ayy = client.emojis.cache.find(emoji => emoji.name === "ayy");
        const help = client.emojis.cache.find(emoji => emoji.name === "help");
        const server = client.emojis.cache.find(emoji => emoji.name === "server");
        const social = client.emojis.cache.find(emoji => emoji.name === "social");
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`**__WidoW - Help Pannel__**`)
        .setColor('FFC0CB')
        .setDescription(`**${ayy}- Si vous avez un(e) problème/question rejoignez le** **__[Server-Support](https://discord.gg/yXN8xUaxjn)__**`)
        .addField(`${server} Server - Moderation`, `\`w=ban\` \`w=mute\` \`w=unmute\` \`w=warn\` \`w=kick\` \`w=slowmode\` \`w=totalbans\` \`w=giverole\` \`w=purge\``)
        .addField(`:coin: Utilitaire`, `\`w=serverinfo\` \`w=roleinfo\` \`w=userinfo\` \`w=mcserver\` \`w=appinfo\``)
        .addField(`${custo} information`, `\`w=invite\` \`w=ping\``)
        .addField(`${social} Social`, `\`w=avatar\` \`w=8b\` \`w=hug\` \`w=rps\` \`w=eject\` \`w=say\``)
        .setThumbnail('https://cdn.discordapp.com/attachments/830379954759008257/834047550603657216/images-removebg-preview_1.png'))
    },
    name: 'ayamie'
}

