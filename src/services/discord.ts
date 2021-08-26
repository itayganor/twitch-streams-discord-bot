import {Client, Intents} from 'discord.js';


export const discordClient = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

console.log('Getting ready...');
discordClient.login(process.env.DISCORD_BOT_TOKEN);

discordClient.on('ready', () => {
    console.log(`✔ Logged in as ${discordClient.user.tag}`);
});
