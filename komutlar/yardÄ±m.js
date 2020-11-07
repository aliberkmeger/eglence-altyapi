const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» a!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» a!balık-tut :** Denizde balık tutarsınız.
> **» a!beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» a!ara155 :** Polisi aramanıza yarar.
> **» a!efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» a!ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» a!espri :** Bot sizin için espri yapar.
> **» a!hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» a!kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» a!kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» a!kralol :** Kral olmanıza yarar.
> **» a!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» a!yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» a!yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» a!öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» a!şekerye :** Bot size şeker ikram eder.
> **» a!yetkilerim :** Yazarak Yetkilerinize Baka Bilirsiniz.
> **» a!prefix :** Yazarak Botun Prefix ini Değişe Bilirsiniz
> **» a!çekiliş :**Yazarak Çekiliş Yapabilirsiniz.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/davetlinkiniz)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0** 

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/7nk2vE3zyv)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=773629382287556638&permissions=8&scope=bot)** **•** **[Ali Berk Meğer Discord)(https://discord.gg/mZdf6SwSuZ)
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};