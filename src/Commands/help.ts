import {
	Discord,
	Command,
	CommandMessage,
	CommandNotFound, Client, Description, CommandInfos,
} from "@typeit/discord";
import { Type } from "typescript";

@Discord("!")
export abstract class AppDiscord {
    @Command("help")
    @Description("affichage de toutes les commandes")
	private help(command: CommandMessage): void {
		command.channel.send(this.ListCommands());
	}

    @CommandNotFound()
    private notFound(command: CommandMessage): void {
        command.reply("nani?");
    }

    private ListCommands() {
		let commands = "";

        const listOfCommands:CommandInfos<Type>[] = Client.getCommands();

        listOfCommands.map((item, key)=>{
            if (typeof item.commandName === "string") {
                commands += "> **" + item.prefix + item.commandName + "**\n";
                commands += "> " + item.description + "\n";

                if (key < listOfCommands.length - 1) {
                    commands += "> \n";
                }
            }
        });

        return commands;
    }
}
