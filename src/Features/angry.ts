import { Client } from 'discord.js'
import WOKCommands from 'wokcommands'

export default (client: Client, instance: WOKCommands) => {
    client.on("messageCreate", async(message) => {
        const channel = message.channel;
        const author = message.author;
        const content = message.content.toLowerCase();
        if (!author.bot) {
            if (content.includes('enerv') || content.includes('énerv'))
                await channel.send('(╯°□°）╯︵ ┻━┻');

            else if (content.includes('(╯°□°）╯︵ ┻━┻'))
                await message.reply('┬─┬ ノ( ゜-゜ノ)');
        }
    });
}

const config = {
    displayName: 'Angry Message',
    dbName: 'ANGRY MESSAGE',
}

export { config }
