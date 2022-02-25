import {ICommand} from "wokcommands";
import {Constants, MessageEmbed} from "discord.js";
import {utils} from "../Utils/utils";
import logger from "../Utils/logger";

export default {
    category: 'Useful',
    description: 'Es-tu dieu ? :o',
    slash: true,
    testOnly: true,
    options: [
        {
            name: 'who',
            description: 'Ton pote est-il dieu ?',
            required: false,
            type: Constants.ApplicationCommandOptionTypes.USER,
        },
    ],

    callback: ({ interaction })=> {
        let msg;
        let user = interaction.user;
        let ctx = interaction;
        if (ctx.options.getUser('who')) {
            user = ctx.options.getUser('who');
        }

        let c, e, c1 = 0, c2 = 0;
        for (let d = 1; d < 31; d++) {
            for (let m = 1; m < 13; m++) {
                c = Math.floor(Math.exp(d * m));
                e = Math.floor(Math.exp(m*d + m));
                console.log("-> c", c%5 + " e", e%5);
            }
        }
        console.log("-> c1", c1);
        console.log("-> c2", c2);

        const calc = Math.floor(Math.exp(utils.day * utils.month));
        if (Number(user.id) % 5 != calc % 5) {
            msg = "Not today " + user.username + " (☞ﾟヮﾟ)☞";
            logger.info(user.username + " n'est pas dieu aujourd'hui.");
            if (Number(user.id) % 3 == calc % 3) {
                const dogs = [
                    "https://tse4.mm.bing.net/th?id=OIP.a3DJB6z2TxA7CeAL0Ivg1wAAAA&pid=Api",
                    "https://tse3.mm.bing.net/th?id=OIP.n-Wv7mW5jqUzhpEk4xLBSwAAAA&pid=Api",
                    "https://tse3.mm.bing.net/th?id=OIP.9_xul5zeuYa3atAqVFL9wgHaHh&pid=Api",
                    "https://tse1.mm.bing.net/th?id=OIP.8lqouTvKlXUss5mmKcXL3wAAAA&pid=Api",
                    "https://tse1.mm.bing.net/th?id=OIP.umf_c2RrcrvS5dB5x5mhXAHaFj&pid=Api",
                    "https://cdn.discordapp.com/attachments/702521676583272521/903048802632626186/unknown.png",
                    "https://cdn.discordapp.com/attachments/702521676583272521/903049360118517810/unknown.png"
                ]
                const dog = dogs[range(user, dogs)];
                const embed = new MessageEmbed()
                    .setTitle("You are Dog.")
                    .setDescription(utils.tag(user) + " is barking today")
                    .setColor("GREYPLE")
                    .setThumbnail(user.avatarURL())
                    .setAuthor("Le p'tit bot",
                        "https://cdn.discordapp.com/avatars/653563141002756106/5e2ef5faf8773b5216aca6b8923ea87a.png",
                        "https://github.com/NozyZy/Lo-potit-bot")
                    .setImage(dog)
                    .setFooter({
                        text: "woof"
                    })

                logger.info(user.username + " est dog");
                msg = embed
            }
        } else {
            const gods = [
                ["https://tse4.mm.bing.net/th?id=OIP.IXAIL06o83HxXHGjKHqZMAHaKe&pid=Api",
                    "Loki"],
                ["https://www.wallpaperflare.com/static/810/148/1018/painting-vikings-odin-gungnir-wallpaper.jpg",
                    "Odin"],
                ["https://tse3.mm.bing.net/th?id=OIP.3NR2eZEBm46mrcFM_p14RgHaJ3&pid=Api",
                    "Osiris"],
                ["https://tse1.explicit.bing.net/th?id=OIP.KXfuA_jDa_cfDkrMInOMfQHaJq&pid=Api",
                    "Shiva"],
                ["https://tse2.mm.bing.net/th?id=OIP.BYG-Xfgo4To4PJaY32Gj0gHaKD&pid=Api",
                    "Poseidon"],
                ["https://tse1.mm.bing.net/th?id=OIP.M6A5OIYcaUO5UUrUjVRn5wHaNK&pid=Api",
                    "Arceus"],
                ["https://tse3.mm.bing.net/th?id=OIP.M2w0Dn5HK19lF68UcicLUwHaMv&pid=Api",
                    "Anubis"],
                ["https://tse2.mm.bing.net/th?id=OIP.pVKMpFtFLRjIpAEsPMafJgAAAA&pid=Api",
                    "Tezcatlipoca"],
                ["https://tse2.mm.bing.net/th?id=OIP.8hT9rmQRFhGa11CTdXXPQAHaJ6&pid=Api",
                    "Venus"]
            ]
            const god = gods[range(user, gods)];
            const embed = new MessageEmbed()
                .setTitle("This is God.")
                .setDescription(utils.tag(user) + " is God today !")
                .setColor("GOLD")
                .setThumbnail(user.avatarURL())
                .setAuthor({
                    name: "Le p'tit bot",
                    iconURL: "https://cdn.discordapp.com/avatars/653563141002756106/5e2ef5faf8773b5216aca6b8923ea87a.png",
                    url: "https://github.com/NozyZy/Lo-potit-bot"
                })
                .setImage(god[0])
                .setFooter({
                    text: god[1],
                    iconURL: "http://cdn.onlinewebfonts.com/svg/img_574152.png"
                })

            logger.info(user.username + " est " + god[1]);
            msg = embed;
        }

        return msg
    }
} as ICommand

function range(user, array) {
    return Math.floor((Math.floor(user.id / 365) + utils.day * 5) / utils.month) % array.length
}
