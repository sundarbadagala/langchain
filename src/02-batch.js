const { model } = require('./models/openrouter')

async function main() {
    const responses = await model.batch([
        'what is 2+2',
        'What is height of mount everest',
        'first india prime minister'
    ])
    responses.forEach(response => console.log(response.content))
}

main()