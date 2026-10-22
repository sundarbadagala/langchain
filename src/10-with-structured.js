const { z } = require("zod");
const { model } = require("./models/ollama");

async function main() {
    const schema = z.object({
        answer: z.string().describe("answer to the user's question"),
        sources: z.array(z.string()).describe("sources used to answer the question"),
    });
    const structuredModel = model.withStructuredOutput(schema)
    const response = await structuredModel.invoke('What is the capital of China?')
    console.log(response)
}

// main()

async function main1() {
    const schema = z.object({
        language: z.string().describe("programming language name"),
        year: z.number().describe("programming language created year"),
        creator: z.string().describe('deveoper name, created this programming language')
    });
    const structuredModel = model.withStructuredOutput(schema)
    const response = await structuredModel.invoke('c++')
    console.log(response)
}

main1()