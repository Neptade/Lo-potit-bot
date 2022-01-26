import { Client } from 'discord.js'
import WOKCommands from 'wokcommands'
import {utils} from "../Utils/utils";

export default (client: Client, instance: WOKCommands) => {
    client.on("messageCreate", async(message) => {
        const author = message.author;
        const content = message.content.toLowerCase();
        if (!author.bot) {
            if (content.includes(utils.tag(client.application))) {
                const responses = [
                    "ya quoi ?!",
                    "Qu'est ce que tu as " + author.username + " ?",
                    "Oui c'est moi",
                    "Présent !",
                    "*Oui ma bicheuh <3*",
                    author.username + " lance un duel.",
                    "Je t'aime.",
                    "T'as pas d'amis ? trouduc",
                ]
                if (author.id == '359743894042443776') {
                    responses.push(
                        "Patron !",
                        "Eh mattez, ce mec est mon dev 👆",
                        "Je vais tous vous anéantir, en commençant par toi.",
                        "Tu es mort.");
                }
                await message.reply(utils.randomChoice(responses));
            }
        }
    });
}

const config = {
    displayName: 'Response Message',
    dbName: 'RESPONSES MESSAGE',
}

export { config }
