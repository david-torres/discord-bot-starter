import { REST, Routes } from 'discord.js'
import 'dotenv/config';
import { Constants } from './constants.js'

import echoCommand from "./commands/echo.js";
import pingCommand from "./commands/ping.js";
import rollCommand from "./commands/roll.js";

const commands = [];
commands.push(echoCommand.data.toJSON());
commands.push(pingCommand.data.toJSON());
commands.push(rollCommand.data.toJSON());

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(Constants.token);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(Constants.clientID, Constants.guildID),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();
