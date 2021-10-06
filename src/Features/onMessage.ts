import {
    Discord,
    Client, Description, On, ArgsOf,
} from "@typeit/discord";

@Discord()
export abstract class AppDiscord {
    @On("message")
    @Description("réagis aux messages communs")
    private onMessage([message]: ArgsOf<"message">, client: Client) {
        if (message.author.id === client.user.id) { return; }

        const msg = message.content.toLowerCase();

        // Bite reaction
        if (msg === "bite") {
            let bite = "8";
            for (let i = 0; i < Math.floor(Math.random() * 500) % 30; i++) {
                bite += "=";
            }
            bite += "D";
            message.channel.send(bite);
        }
    }
}
