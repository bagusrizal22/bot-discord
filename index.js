require("dotenv").config();
const { Client, GatewayIntentBits, } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});

client.once("ready", () => {
    console.log("Bot Ready...");
});

client.login(process.env.bitchinAssToken);