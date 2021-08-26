require('dotenv').config();

import {discordClient} from './services/discord';
import notifyNewGameStreams from './notifyNewGameStreams';


const RICHUP_GAME_ID = '1837784895';


discordClient.on('ready', () => {
    notifyNewGameStreams('743');
});


