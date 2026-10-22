const { ChatPromptTemplate } = require('@langchain/core/prompts')
const { AIMessage, HumanMessage, SystemMessage } = require('@langchain/core/messages')
const { model } = require('./models/ollama')

async function main() {
    const prompt = ChatPromptTemplate.fromMessages([
        ['human', 'Explain node.js in one line']
    ])
    const formattedPrompt = await prompt.formatMessages()
    const response = await model.invoke(formattedPrompt)
    console.log(response.content)
}
// main()

async function messagesFn() {
    const response = await model.invoke([
        new HumanMessage('What is React.js'),
        new AIMessage('React.js is a library'),
        new HumanMessage('Who created it?')
    ])
    console.log(response.content)
}
// messagesFn()

async function systemMessageFn1() {
    const response = await model.invoke([
        new SystemMessage('You are node.js developer'),
        new HumanMessage('What is stream in one line')
    ])
    console.log(response.content)
}
// systemMessageFn1()

async function systemMessageFn2() {
    const response = await model.invoke([
        new SystemMessage('You are senior civil engineer'),
        new HumanMessage('What is stream in one line')
    ])
    console.log(response.content)
}
// systemMessageFn2()

async function variableFn() {
    const prompt = ChatPromptTemplate.fromMessages([
        ['system', `You are a {role}`],
        ['human', `Explain {topic} in one line`]
    ])
    const formatMessages = await prompt.formatMessages({
        role: 'Backend Developer',
        topic: 'Node.js'
    })
    console.log(formatMessages)
    const response = await model.invoke(formatMessages)
    console.log(response.content)
}

// variableFn()

async function variablePipeFn() {
    const prompt = ChatPromptTemplate.fromMessages([
        ['system', 'You are a {role}'],
        ['human', 'Explain {topic} in one line']
    ])
    const chain = prompt.pipe(model)
    const response = await chain.invoke({
        role: "Backend developer",
        topic: 'Node.js'
    })
    console.log(response.content)
}
// variablePipeFn()

async function exmapleFn() {
    const prompt = ChatPromptTemplate.fromMessages([
        ['system', 'you are a programming instructor'],
        ['human', '{question}']
    ])

    const chain = prompt.pipe(model)
    const response = await chain.invoke({
        question: 'What is React.js'
    })
    console.log(response.content)
}
exmapleFn()