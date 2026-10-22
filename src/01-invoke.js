const { model } = require('./models/openrouter')

async function main() {
    const res = await model.invoke("What is Node.js?")
    console.log(res.content)
}
main()