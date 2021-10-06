import {
    Discord,
    Description, Command, CommandMessage,
} from "@typeit/discord";

@Discord("!")
export abstract class AppDiscord {
    @Command("invite")
    @Description("Invitation link of Lo potit bot")

    private invite(command: CommandMessage): void {
        command.channel.send("Invitez-moi ! :hot_face:");
        command.channel.send("https://discordapp.com/oauth2/authorize?&client_id=893613277068820501&scope=bot&permissions=8");
    }
}