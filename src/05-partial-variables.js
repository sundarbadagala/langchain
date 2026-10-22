const { PromptTemplate } = require('@langchain/core/prompts')
const { model } = require('./models/ollama')

async function partialsFn() {
    const prompt = new PromptTemplate({
        template: `Explain {topic} in one line in the language {language}`,
        inputVariables: ['topic'],
        partialVariables: { language: 'English' }
    })
    const formattedPrompt = await prompt.format({
        topic: 'node.js'
    })
    console.log(formattedPrompt)
    const response = await model.invoke(formattedPrompt)
    console.log(response.content)
}

partialsFn()
