import {ICommand} from "wokcommands";
import {Constants, MessageEmbed} from "discord.js";
import {utils} from "../Utils/utils";
import logger from "../Utils/logger";

export default {
    category: 'Useful',
    description: 'Are you prime bro ?',
    slash: true,
    options: [
        {
            name: 'number',
            description: 'El nombre',
            required: true,
            type: Constants.ApplicationCommandOptionTypes.NUMBER,
        },
    ],

    callback: ({ interaction})=> {
        const ctx = interaction;
        const user = interaction.user;
        const nb = ctx.options.getNumber('number');
        if (nb < 2) {
            const responses = [
                `Really think ${nb} could be prime ?`,
                `Bro ? ${nb} prime ?`,
                `Check the definition please (> 1)`,
                `Just cannot`,
                `Same as asking what flavour is my car ???? ||pineapple||`,
                `No, must be >1 (${nb} is not dude)`
            ]
            return responses[Math.floor(Math.random() * responses.length)]
        }
        const isPrime = utils.isPrime(nb);
        const embed = new MessageEmbed()
        if (isPrime) {
            logger.info(user.username + ' a trouvé que ' + nb + ' est premier')
            embed.setTitle(nb + ' is prime bro !!').setColor('DARK_GREEN')
        }
        else {
            logger.info(user.username + ' a trouvé que ' + nb + ' est premier')
            embed.setTitle(nb + ' is not prime :\'(').setColor('DARK_RED')
        }
        return embed.setDescription(utils.tag(user))
    }
} as ICommand
