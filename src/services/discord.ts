import {Client, Intents} from 'discord.js';
import getRequiredEnvVariable from '../utils/getRequiredEnvVariable';


export const discordClient = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


const DISCORD_BOT_TOKEN = getRequiredEnvVariable('DISCORD_BOT_TOKEN');


export function initializeDiscordClient() {
    return new Promise<void>(resolve => {
        console.log('Initializing Discord client...');
        discordClient.login(DISCORD_BOT_TOKEN);

        discordClient.on('ready', () => {
            console.log(`✔ Logged in as ${discordClient.user.tag}`);
            resolve();
        });
    });
}
