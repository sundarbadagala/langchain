const { model } = require('./models/ollama')
const { PromptTemplate } = require('@langchain/core/prompts')

async function withoutPipe() {
    const prompt = new PromptTemplate({
        template: 'Explain {topic} in one line',
        inputVariables: ['topic']
    })
    const formattedPrompt = await prompt.format({
        topic: 'Node.js'
    })
    console.log(formattedPrompt)
    const response = await model.invoke(formattedPrompt)
    console.log(response.content)
}
// withoutPipe()

async function withPipe() {
    const prompt = new PromptTemplate({
        template: 'Explain {topic} in one line',
        inputVariables: ['topic']
    })

    const chain = prompt.pipe(model)

    const response = await chain.invoke({
        topic: 'Node.js'
    })
    console.log(response.content)
}
withPipe()