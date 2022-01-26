import { Client } from 'discord.js'
import WOKCommands from 'wokcommands'

export default (client: Client, instance: WOKCommands) => {
    client.on("messageCreate", async(message) => {
        const channel = message.channel;
        const author = message.author;
        const content = message.content.toLowerCase();
        if (!author.bot) {
            // your feature
        }
    });
}

const config = {
    displayName: 'Message',
    dbName: 'MESSAGE',
}

export { config }
