import { parse } from 'date-fns'
import { Client, GuildMember, Intents } from 'discord.js'

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] })

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === 'bokan') {
    const member = interaction.member as GuildMember
    const time = interaction.options.getInteger('time')
    const channel = member.voice.channel

    if (time && channel) {
      console.log(parse(time.toString().padStart(4, '0'), 'HHmm', new Date()))
      console.log(new Date())

      setTimeout(() => {
        channel.members.forEach((member) => member.voice.disconnect())
      }, parse(time.toString().padStart(4, '0'), 'HHmm', new Date()).getTime() - new Date().getTime())
    }

    await interaction.reply('Gotcha!')
  }
})

client.login(process.env.DISCORD_TOKEN!)
