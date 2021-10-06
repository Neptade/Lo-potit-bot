import {
    Discord,
    Command,
    Description, CommandMessage,
} from "@typeit/discord";

@Discord("!")
export abstract class AppDiscord {
    @Command("repeat")
    @Description("Répète ton message !")
    private repeat(command: CommandMessage): void {
        const length = command.content.length;
        let msg = "";

        if (length < 7) {
            
            for (let i = 8; i < length; i++) {
                msg += command.content[i];
            }
            command.delete();
            command.channel.send(msg);
        }
        else {
            msg = "Met un message bébète <@!" + command.author.id + ">";
            command.channel.send(msg);
        }
    }
}