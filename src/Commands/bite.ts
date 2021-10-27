import {ICommand} from "wokcommands";
import {MessageEmbed} from "discord.js";
import {utils} from "../Utils/utils";
import logger from "../Utils/logger";

export default {
    category: 'Useful',
    description: 'Qui a la plus gorsse ? ( ͡° ͜ʖ ͡°)',
    slash: 'both',
    testOnly: true,

    callback: ({ message, interaction})=> {
        let bite = "8";
        let user;
        if (message) {
            user = message.author
        } else if (interaction) {
            user = interaction.user
        }

        let value = ((parseInt(user.id) % 10) * Math.exp(utils.day + utils.month));
        for (let i = 0; i < value % (30 + utils.day - utils.month); i++) {
            bite += "=";
        }
        bite += "D";
        logger.writeIntoFile(user.username + " a une bite de " + (value % (30 + utils.day - utils.month)).toString(), "message")
        return new MessageEmbed()
            .setTitle(bite)
    }
} as ICommand