const { StringOutputParser } = require('@langchain/core/output_parsers')
const { model } = require('./models/ollama')

async function withoutParser() {
    const response = await model.invoke('What is node.is in one line')
    console.log(response)
}
// withoutParser()

async function withParser() {
    const parser = new StringOutputParser()
    const chain = model.pipe(parser)
    const response = await chain.invoke('What is node.js in one line')
    console.log(response)
}
withParser()