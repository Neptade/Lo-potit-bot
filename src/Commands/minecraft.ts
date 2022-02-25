import {ICommand} from "wokcommands";
import {Client, Constants, Message, MessageEmbed} from "discord.js";
import {utils} from "../Utils/utils";
import logger from "../Utils/logger";

export default{
    category: 'Useful',
    description: 'invite serveur minecraft',
    slash: true,
    testOnly: true,

    callback: ({ interaction })=>{
        const user = interaction.user;
        const ctx = interaction;
        user.send('test');
        Client.on('message', (message) =>{
            user.send({content: message.content});
        })
        ctx.channel.send('sent you a dm');
    }
}