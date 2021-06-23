const Discord = require('discord.js')
const Color = "RANDOM", Fetch = require("node-fetch").default;

module.exports = {
  name: "mcservers",
  help: {
    description: 'Cette commande permet de voir les informations d\'un seveur minecraft',
    syntax: '[adresse du serveur]'
},
  aliases: ["mcserver", "mcs"],
  category: "Information",
  description: "Show Minecraft Server Information!",
  usage: "Minecraftserver <Ip>",
  run: async (message, args) => {

    const Ip = args[0];
    if (!Ip) return message.channel.send("Please Give Minecraft Java Server IP!");

    const response = await Fetch(`https://api.mcsrvstat.us/2/${Ip}`);
    const json = await response.json();

    if (!json.online) return messsage.channel.send("Invalid Server IP Or Server Is Offline");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Awkat - Minecraft Server Information")
    .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${Ip.toLowerCase()}`)
    .addField("Adresse", json.hostname)
    .addField("IP", json.ip || "Unknown", true)
    .addField("Port", json.port || "Default", true)
    .addField("Statut", json.online ? "Online" : "Offline")
    .addField("Version", json.version || "Unknown")
    .addField("Joueurs", json.players ? json.players.online : "Unknown")
    .addField("Nombre maximum de joueur", json.players ? json.players.max : "Unknown")
    .setTimestamp();

    if (json.motd && json.motd.clean && json.motd.clean.length > 1) Embed.addField("Description", json.motd.clean.length > 100 ? `${json.motd.clean.slice(0, 100)}...` : json.motd.clean);

    return message.channel.send(Embed);
  }
};