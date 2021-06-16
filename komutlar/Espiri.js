const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = [
        'Seni görünce; \ngözlerim dolar, \nkulaklarım euro.',
        'Kar üzerinde yürüyen adama ne denir. Karabasan.',
        'Yıkanan Ton’a ne denir? Washington!',
        'Gidenin arkasına bakmayın yoksa geleni göremezsiniz.',
        '+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.',
        '+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!',
        '+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.',
        '+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.',
        '+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.',
        'Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.',
        '+Acıkan var mı ya? \n-Yok bizde tatlı kan var.',
        'Yılanlardan korkma, yılmayanlardan kork.',
        '+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.',
        'Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.',
        'Aaa siz çok terlemişsiniz durun size terlik getireyim.',
        'Aklımı kaçırdım, 100.000 TL fidye istiyorum.',
        '-Dün beni dayım aradı\n+Hangi dayın?\n-Depresyondayım',
        "Tekel'in nesi var, iki elin sesi var.",
         "-Arapçayı sever misin?\n+Vallahi hiç içmedim.",
        "-Ne yapıyorsun?\n+Telefonla konuşuyorum..\n-Aaa sizin telefon konuşuyor mu?",
        "-En değerli meşe hangisidir?\n+İzzet Altınmeşe ahahah :)",
        "Seven unutmaz oğlum, eight unutur.",
        "Geçen gün geçmiş günlerimi aradım ama meşguldü.",
        "-Adamın biri kitap okuyormuş ölmüş.\n+Neden?\n-Çünkü satır başına gelmiş.",
        "Yeni yapılmış resimlere ne denir? Nevresim!",
         "Adamın biri gülmüş.. saksıya koymuşlar.",
        "Geçen gün taksi çevirdim hala dönüyor.",
        "Bu erikson, başka erik yok.",
        "Yaş olmuş 35 babam sende göz var oğlum dedi. Bunu 35 yıl sonra mı fark ettin babacım. Çok şaşırdım.",
        "Sinüs 60, kosinüs tutmuş…",
        "-İnsanları neden kafasına su dökerek uyandırırlar?\n+Neden?\n-Çünkü suyun kaldırma kuvveti vardır.",
        "Adamın biri yüzmüş, karısıda doksandokuzmuş.",
        "Çocuğumun adını mafya koydum artık bende mafya babasıyım.",
        "Dünya dönermiş ay da köfte…",
        "-Nuri Ölünce Çin'e gömün.\n+Neden?\n-Nuriçinde yatsın.",
        "Adamın biri kızmış istemeye gelmişler.",
         "Çalmak fiilinin gelecek zamanı nedir? Hapse girmek.",
        "Adamın biri yatmış, karısıda gemi.",
        "-Adamın biri hindistanda yürüyomuş. Kafasına BUDA heykeli düşmüş ne demiş?\n+Ne demiş?\n-Başıma budamı gelecekti."  
      ];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
};