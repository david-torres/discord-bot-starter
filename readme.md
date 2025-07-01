# Discord Bot Starter

A starter template for building Discord bots with discord.js.

## Included Commands

* `/ping`: Replies with "Pong!". A good way to check if the bot is alive.
* `/echo [message]`: Replies with the message you provide.
* `/roll [dice]`: Rolls dice. You can specify the number of dice and sides in the format `d20` or `2d6`.

## Getting Started

### Prerequisites

* Node.js (v16.9.0 or higher)
* A Discord bot token. You can get one from the [Discord Developer Portal](https://discord.com/developers/applications).

### Installation

1. Clone this repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the project and add your bot token and client ID:
   ```
   DISCORD_TOKEN=your_token_here
   CLIENT_ID=your_client_id_here
   ```
4. Deploy the commands to your server:
   ```bash
   npm run deploy
   ```
5. Run the bot:
   ```bash
   npm start
   ```

## Creating Your Own Commands

1. Create a new file in the `commands` directory. The filename will be the command name.
2. In the new file, export a `data` object and an `execute` function. See the existing commands for examples.
3. The `data` object should be a `SlashCommandBuilder` instance that defines the command's name, description, and options.
4. The `execute` function will be called when the command is used. It receives an `interaction` object as an argument.
5. After creating your new command file, you'll need to re-run the deploy script to register it with Discord:
   ```bash
   npm run deploy
   ```