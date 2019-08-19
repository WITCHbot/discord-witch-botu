const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hey aramızda bir cadı adayı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'w?aktifturnuva') {
    msg.reply('https://events.tr.leagueoflegends.com/events/401381!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Selam') {
    msg.reply('selam');
  }
});

client.login('NjEyNzkyOTMyOTI3NTM3MTYz.XVnr1A.QAP9I9Tn2zqsklaqBwcrNcz7qu8');
