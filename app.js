import {
	Client,
	GatewayIntentBits,
	Events,
	Collection,
	Partials
} from "discord.js";
import "dotenv/config";
import { Constants } from './constants.js'
import echo from "./commands/echo.js";
import ping from "./commands/ping.js";
import roll from "./commands/roll.js";
import routes from './routes.js';
import express from 'express';
import bodyParser from 'body-parser';

// Create a new client instance
const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMembers],
	partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User]
});

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(Constants.token);

client.commands = new Collection();
client.commands.set(roll.data.name, roll);
client.commands.set(echo.data.name, echo);
client.commands.set(ping.data.name, ping);

// commands
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// handle emojis
client.on(Events.MessageReactionAdd, async (reaction, user) => {});

// handle emoji removes
client.on(Events.MessageReactionRemove, async (reaction, user) => {});

// express web server
const app = express();

// Add JSON body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.client = client;
  next();
});

// Add routes
routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, '::', () => {
	console.log(`Server is running on port ${PORT}.`);
});