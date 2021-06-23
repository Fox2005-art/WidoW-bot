const Discord = require('discord.js')
const Color = "RANDOM", Fetch = require("node-fetch").default;

module.exports = {
  name: "mcserver",
  help: {
    description: 'Cette commande permet de voir les informations d\'un seveur minecraft',
    syntax: '[adresse du serveur]'
},
  aliases: ["mcserver", "mcs"],
  category: "Information",
  description: "Show Minecraft Server Information!",
  usage: "Minecraftserver <Ip>",
  run: async (message, args, client) => {
    const arrow2 = client.emojis.cache.find(emoji => emoji.name === "arrow2");
    const Ip = args[0];
    if (!Ip) return message.channel.send("Please Give Minecraft Java Server IP!");

    const response = await Fetch(`https://api.mcsrvstat.us/2/${Ip}`);
    const json = await response.json();

    if (!json.online) return messsage.channel.send("Invalid Server IP Or Server Is Offline");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("WidoW - Minecraft Server Information")
    .setTimestamp()
    .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${Ip.toLowerCase()}`)
    .addField('__information__', [
       `**${arrow2} Adresse :** \`${json.hostname}\`` ,
       `**${arrow2} IP :** \`${json.ip || "Unknown"}\``,
       `**${arrow2} Port :** \`${json.port || "Default"}\``,
       `**${arrow2} Statut :**  ${json.online ? "\`Online\`" : "\`Offline\`"}`,
       `**${arrow2} Version :** \`${json.version || "Unknown"}\``,
       `**${arrow2} Players :** \`${json.players ? json.players.online : "Unknown"}\``,
       `**${arrow2} Max Players :** \`${json.players ? json.players.max : "Unknown"}\``,
    ])
    if (json.motd && json.motd.clean && json.motd.clean.length > 1) Embed.addField("__Description__", json.motd.clean.length > 100 ? `${json.motd.clean.slice(0, 100)}...` : json.motd.clean);

    return message.channel.send(Embed);
  }
};