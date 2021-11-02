import {Client, Intents} from "discord.js";
import dotenv from 'dotenv';
import WOKCommands from "wokcommands";
import path from 'path';
dotenv.config()

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
});

client.on("ready", () => {
    console.log("Logged in as \n" + client.user.username + "\n" + client.user.id + "\n--------------");

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'Commands'),
        featuresDir: path.join(__dirname, 'Features'),
        delErrMsgCooldown: 10,
        botOwners: ['359743894042443776'],
        typeScript: true,
        testServers: ['826575187721322546', '702521676134482001', '410766134569074691']
    })
});

const TOKEN = (process.env.NODE_ENV === "dev") ? process.env.TOKEN_DEV : process.env.TOKEN_PROD;
if (typeof TOKEN !== "undefined") {
    client.login(TOKEN).then(r => console.log("Running " + process.env.NODE_ENV));
} else {
    console.log("No token found")
}
