# Twitch Streams Discord Bot

This bot sends a Discord (embedded) message to a channel of choice, every time a new stream of a specific game goes live.

## Usage

Before setting up the bot, you'll need:
* a [Twitch Game ID](https://discuss.dev.twitch.tv/t/name-of-game-with-game-id/25499) - IDs of games to get active streams of.
* a [Twitch client ID & client secret](https://dev.twitch.tv/docs/authentication#registration) - to authenticate with Twitch..
* a [Discord bot token](https://discord.com/developers/docs/topics/oauth2) - to authenticate with Discord.
* a [Discord channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) - to which the notifications will be sent.

After you have all required identifiers, go ahead and run the code:

1. Define the required environment variables (replace the example values with your own):
    ```dotenv
    DISCORD_SEND_TO_CHANNEL_ID=432809413209214389
    DISCORD_BOT_TOKEN=gjlKHJK897gJHGhdhfgjh987.YbfdkA.ADNndfgmf54390JKlfnmnm9kio
    TWITCH_GAME_ID=1837784896
    TWITCH_CLIENT_ID=ajs945owrkmcvj59dj6nfkck6jrj976
    TWITCH_CLIENT_SECRET=wieu8d0cmvn54olkp0w2sx21dk8dj49a2
    ```
   You can use a `.env` file, or just set your deployment's environment variables as normal.

2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start`.
