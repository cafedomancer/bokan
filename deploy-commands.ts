import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

const commands = [
  new SlashCommandBuilder()
    .setName('bokan')
    .setDescription('Disconnects all the members from the channel at a specific time!')
    .addIntegerOption((option) => option.setName('time').setDescription('The time to disconnect').setRequired(true))
].map((command) => command.toJSON())

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN!)

rest
  .put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID!, process.env.DISCORD_GUILD_ID!), {
    body: commands
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
