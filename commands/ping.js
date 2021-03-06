  
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (message, args, client) => {
      const msg = await message.channel.send("Pinging...");
      const Embed = new MessageEmbed()
        .setTitle("š Pong")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `ā¢ Latency is \`${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\`\nā¢ API Ping is \`${Math.round(client.ws.ping)}ms\``
        )
        .setColor('#FF0000');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};