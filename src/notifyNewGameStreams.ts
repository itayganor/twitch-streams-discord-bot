import {TwitchClient} from './services/twitch';
import {HelixStream} from 'twitch';
import {MessageEmbed} from 'discord.js';
import {discordClient} from './services/discord';


const INTERVAL = 5 * 1000; // the interval to scrape streams in.

const runningGames = new Set<string>(); // holds all streamIds known to the bot, so it'll know the status of the previous scrape in each new scrape.
let isFirst = true; // isFirst is used to prevent sending tons of messages in a row when it's the first run of the bot.


export default function notifyNewGameStreams(gameId: string) {
    scrapeStreamsOfGame(gameId);
}


async function scrapeStreamsOfGame(gameId: string) {
    const gameStreams = await TwitchClient.getStreamsOfGame(gameId);

    const streamIdsToClean = new Set([...runningGames]);

    gameStreams.forEach(stream => {
        if (!runningGames.has(stream.id)) {
            // it's new!
            runningGames.add(stream.id);
            notifyNewStream(stream);
            return;
        } else {
            // it's alive, don't clean it
            streamIdsToClean.delete(stream.id);
            return;
        }
    });

    streamIdsToClean.forEach(streamId => {
        // console.log(`  deleting stream ${streamId}`);
        runningGames.delete(streamId);
    });

    isFirst = false;

    setTimeout(() => { // fire the next iteration
        scrapeStreamsOfGame(gameId);
    }, INTERVAL);
}

async function notifyNewStream(stream: HelixStream) {
    if (isFirst) return;

    const streamer = await stream.getUser();
    const streamUrl = `https://twitch.tv/${stream.userName}`;

    const embed = new MessageEmbed()
        .setTitle(stream.title)
        .setURL(streamUrl)
        .setAuthor(stream.userDisplayName, streamer.profilePictureUrl, streamUrl)
        .setDescription(`Now streaming ${stream.gameName}`)
        .setImage(stream.getThumbnailUrl(640, 360))
        .setTimestamp(stream.startDate);

    const channel = discordClient.channels.cache.get('780485074859720704');
    if (channel.isText()) {
        channel.send({embeds: [embed]});
    }
}
