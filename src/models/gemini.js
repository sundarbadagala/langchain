const { ChatGoogleGenerativeAI } = require('@langchain/google-genai')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    temperature: 0
})

module.exports = { model }
