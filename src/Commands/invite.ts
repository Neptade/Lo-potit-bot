import {ICommand} from "wokcommands";
import {MessageActionRow, MessageButton, MessageEmbed} from "discord.js";

export default {
    category: 'Information',
    description: 'Invite mwaaaaaaaaaa',

    slash: true,
    testOnly: true,

    callback: async ({interaction: msgInt, channel})=> {
        const embed = new MessageEmbed()
        .setTitle("Invite moi  🥵")
        .setColor('GOLD')
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=893613277068820501&permissions=8&scope=bot%20applications.commands")
                    .setStyle("LINK")
                    .setEmoji("📥")
                    .setLabel("Allez clique")
            )
        await msgInt.reply({
            embeds: [embed],
            components: [row],
        })
    },
} as ICommand