const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`✨ ${client.user.tag} 已經準備好了！`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.includes('拍拍')) {
    message.channel.send('來～拍拍抱一個🫂 你今天也很棒！˶ˊᵕˋ˶');
  }
});

client.login(config.token);
