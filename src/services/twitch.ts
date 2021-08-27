import {ApiClient} from 'twitch';
import {ClientCredentialsAuthProvider} from 'twitch-auth';

import getRequiredEnvVariable from '../utils/getRequiredEnvVariable';


const clientId = getRequiredEnvVariable('TWITCH_CLIENT_ID');
const clientSecret = getRequiredEnvVariable('TWITCH_CLIENT_SECRET');
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);


const apiClient = new ApiClient({authProvider});


export class TwitchClient {
    static async getGameByName(name: string) {
        return (await apiClient.helix.games.getGameByName(name));
    }
    static async getStreamsOfGame(gameId: string | string[]) {
        const request = apiClient.helix.streams.getStreamsPaginated({game: gameId});
        return await request.getAll();
    }
}
