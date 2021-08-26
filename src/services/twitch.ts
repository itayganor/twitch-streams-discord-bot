import {ApiClient} from 'twitch';
import {ClientCredentialsAuthProvider} from 'twitch-auth';


const clientId = 'g5hn026qb26vhopn19l3knau0spsl9';
const clientSecret = process.env.TWITCH_CLIENT_SECRET;
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);


const apiClient = new ApiClient({authProvider});



export class TwitchClient {
    static async getGameByName(name: string) {
        return (await apiClient.helix.games.getGameByName(name));
    }
    static async getStreamsOfGame(gameId: string) {
        const request = apiClient.helix.streams.getStreamsPaginated({game: gameId});
        return await request.getAll();
    }
}
