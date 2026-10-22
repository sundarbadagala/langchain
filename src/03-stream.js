const { model } = require('./models/openrouter')

async function main() {
    const response = await model.stream("What is Node.js?")
    for await (const chunk of response) {
        process.stdout.write(chunk.content)
    }
}

main()