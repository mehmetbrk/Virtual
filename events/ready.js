const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
    
module.exports = client => {
   
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Tüm Komutlar Başarıyla Yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} İsmi İle Giriş Yapıldı!`);
  client.user.setStatus("online");
   var OTTOMAN = [
        
       
       "📑 | !sponsor"
    
       
    
       
   ];
  setInterval(function() {
  
        var random = Math.floor(Math.random()*(OTTOMAN.length-0+1)+0);
        client.user.setActivity(OTTOMAN[random], "online"); 
        }, 2 * 5000);
}