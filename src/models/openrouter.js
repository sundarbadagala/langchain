const { ChatOpenRouter } = require("@langchain/openrouter");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const model = new ChatOpenRouter({
    model: 'nvidia/nemotron-3-ultra-550b-a55b:free',
    temperature: 0,
    apiKey: process.env.OPENROUTER_API_KEY,
});

module.exports = { model };

