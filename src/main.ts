import {
    Client
} from "@typeit/discord";

import {
	TOKEN_PROD, TOKEN_DEV
} from "../tokens.json";

async function start(): Promise<void> {

	const client = new Client({
		classes: [
			`${__dirname}/Commands/*.ts`,
			`${__dirname}/Features/*.ts`
		],
		silent: false,
		variablesChar: ":",
	});

	client.once("ready", async () => {
		console.log("Logged in as \n" + client.user.username + "\n" + client.user.id + "\n--------------");
	});

	const TOKEN = (process.env.NODE_ENV === "dev") ? TOKEN_DEV : TOKEN_PROD;
	if (typeof TOKEN !== "undefined") {
		await client.login(TOKEN);
	}
}

start();
