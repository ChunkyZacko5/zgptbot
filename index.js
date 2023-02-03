// Create a Discord bot with OpenAI API
require('dotenv').config();

// Configuration
const ( Client, GatewayIntentBits ) = require('discord.js');
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent 
]})

// Connection OpenAI
const { Configuration , OpenAIApi } = require('openai');
const Configuration = new Configuration({
	organization: process.enc.OPENAI_ORG,
	apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(Configuration);

// When the bot is ready, log an message
// For messages.
client.on('messageCreate', async function(message)){
	try {
		console_log(message.content);
		message.reply(`You say: ${message.content}`);
	} catch(err){
		console_log(err)
	}
};

// Connect to Discord API
client.login(process.env.DISCORD_TOKEN);
console.log("The chatbot is online!")