require('dotenv').config();

import getRequiredEnvVariable from './utils/getRequiredEnvVariable';
import {initializeDiscordClient} from './services/discord';
import notifyNewGameStreams from './notifyNewGameStreams';


const GAME_IDS = getRequiredEnvVariable('GAME_ID').split(',');

async function main() {
    await initializeDiscordClient();
    notifyNewGameStreams(GAME_IDS);
}

if (require.main === module) {
    main();
}
