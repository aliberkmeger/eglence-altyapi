const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın! **g!sa-as aç veya g!sa-as kapat**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`**Artık Bot sa yazınca karşılık verecektir! Kapatmak için "\`g!sa-as kapat\`" yazmalısın.**`)
 
  }
  
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'açik')
    message.channel.send(`**Artık Bot biri sa deyince karşılık verilmeyecek.**`)

  }
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-sistemi'],
  permLevel: 0,
  kategori: "Ayarlar"
};
 
exports.help = {
  name: 'sa-as',
  description: 'Sa As ayarlarsın.',
  usage: 'sa-as'
};