import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('roll 🎲')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('#d#, # of dice and # of sides (e.g. 2d6)')),
    async execute(interaction) {
        const input = interaction.options.getString('input') ?? '2d6';
        let message;
        try {
            const [rolls, limit] = input.split("d").map((x) => parseInt(x));
            let i = 0
            const vals = new Array(rolls)
                .fill(0)
                .map(() => Math.floor(Math.random() * limit) + 1);

            const result = vals.join(", ");
            const total = vals.reduce((acc, v) => acc += v)

            message = `Roll (${input}), Result: ${result}, Total: ${total}`;
        } catch (err) {
            message = "Format has to be in NdN!";
        }
        await interaction.reply({ content: message });
    },
};