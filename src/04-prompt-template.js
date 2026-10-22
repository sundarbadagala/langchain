const { PromptTemplate } = require('@langchain/core/prompts')
const { model } = require('./models/ollama')

async function promptFn() {
    const prompt = PromptTemplate.fromTemplate(`Explain {topic} in one line for {level}`)
    const formattedPrompt = await prompt.format({
        topic: 'node.js',
        level: 'beginners'
    })
    console.log(formattedPrompt)
    const response = await model.invoke(formattedPrompt)
    console.log(response.content)
}

promptFn()