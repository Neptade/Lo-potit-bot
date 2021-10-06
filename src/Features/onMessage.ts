import {
    Discord,
    Client, Description, On, ArgsOf,
} from "@typeit/discord";
import {utils} from "../Utils/utils"
import logger from "../Utils/logger";

@Discord()
export abstract class AppDiscord {
    @On("message")
    @Description("donne une taile de bite aléatoire")
    private onMessage([message]: ArgsOf<"message">, client: Client) {
        if (message.author.id === client.user.id) { return; }

        const msg = message.content.toLowerCase();
        const user = message.author;

        if (msg === "bite") {
            let bite = "8";
            let value = ((parseInt(user.id) % 10) * Math.exp(utils.day + utils.month));
            for (let i = 0; i < value % (30 + utils.day - utils.month); i++) {
                bite += "=";
            }
            bite += "D";
            message.channel.send(bite);
            logger.writeIntoFile(user.username + " a une bite de " + (value % (30 + utils.day - utils.month)).toString(), "message")
        }
    }
}
