const Discord = require("discord.js");

exports.run = (client, message) => {
  let sunucu = new Discord.MessageEmbed()
    .setAuthor("Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
  .setColor("RANDOM")
    .addField(":fleur_de_lis: Sunucu İsmi :fleur_de_lis:", message.guild.name)
    .addField(":fleur_de_lis: Sunucu İdsi :fleur_de_lis:", message.guild.id)
    .addField(":fleur_de_lis: Sunucu Bölgesi :fleur_de_lis:", message.guild.region)
    .addField(
      ":hammer_pick: Roller: :hammer_pick:",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .addField(":watch: AFK Kanalı: :watch:", `${message.guild.afkChannel}`, true)
    .addField(":watch: AFK Zaman Aşımı: :watch:", message.guild.afkTimeout, true)
    .addField(":hammer_pick: Oluşturma Tarihi: :hammer_pick:", message.guild.createdAt, true)
    .setTimestamp()
    .setFooter("Sunucu Bilgi", message.guild.iconURL());
  return message.channel.send(sunucu);
};

module.exports.conf = {
  aliases: ["sunucubilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucu-bilgi",
  description: "",
  usage: "sunucu-bilgi"
};