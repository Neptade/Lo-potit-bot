import { ButtonInteraction, Client, MessageActionRow, MessageButton } from "discord.js";
import logger from "../Utils/logger";
import { utils } from "../Utils/utils";

export default (client: Client) => {
    client.on("messageCreate", async (message) => {
        const channel = message.channel;
        const author = message.author;
        const content = message.content.toLowerCase();
        if (!author.bot) {
            if (["f", "rip"].includes(content)) {
                let row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setLabel("F")
                            .setStyle("PRIMARY")
                            .setCustomId("pay_respect")
                    );
                const response = await message.reply(({
                    content: "Press **F** to pay respect",
                    components: [row]
                }));

                const collector = channel.createMessageComponentCollector({
                    max: 1,
                    time: 1000 * 45
                });

                collector.on("collect", async (i: ButtonInteraction) => {
                    if (i.customId == "pay_respect") {
                        i.user.send({
                            content: utils.randomChoice([
                                "You paid respect.",
                                "You a true buddy 💪",
                                "RIP",
                                "HAHA DIE",
                                "Hope you're alright man 😢",
                                "Dommage ¯\\_(ツ)_/¯",
                                "Tant pis 😂",
                                "F",
                                "Courage, ca va aller ❤"
                            ]),
                        }).then(() => {
                            logger.info(i.user.username + " paid respect.");
                            i.deferUpdate();
                        });
                    }
                });

                collector.on("end", async (collected) => {
                    let btnEdt;
                    if (collected.first()) {
                        btnEdt = new MessageActionRow().addComponents(
                            new MessageButton()
                                .setLabel("You paid respect")
                                .setStyle("SUCCESS")
                                .setCustomId("pay_respect")
                                .setDisabled(true)
                        );
                    }
                    else {
                        btnEdt = new MessageActionRow().addComponents(
                            new MessageButton()
                                .setLabel("You didn't show any respect !")
                                .setStyle("DANGER")
                                .setCustomId("pay_respect")
                                .setDisabled(true)
                        );
                    }
                    await response.edit(({
                        components: [btnEdt]
                    }));
                });
            }
        }
    });
}

const config = {
    displayName: "Message",
    dbName: "MESSAGE",
};

export { config };
