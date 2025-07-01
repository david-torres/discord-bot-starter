import { SlashCommandBuilder } from "discord.js";

export default {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Repeats what you tell it')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')),
	async execute(interaction) {
		const input = interaction.options.getString('input') ?? 'More input!';
		await interaction.reply({ content: input, ephemeral: true });
	},
};