const { model } = require('./models/gemini')

async function main() {
    const res = await model.invoke(
        "Hi"
    );

    console.log(res.content);
}

main();
