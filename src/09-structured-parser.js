const { StructuredOutputParser } = require("@langchain/core/output_parsers");
const { z } = require("zod");
const { PromptTemplate } = require("@langchain/core/prompts");
const { model } = require("./models/gemini");

async function main() {
    const schema = z.object({
        answer: z.string().describe("answer to the user's question"),
        sources: z.array(z.string()).describe("sources used to answer the question"),
    });
    const parser = StructuredOutputParser.fromZodSchema(schema);
    const prompt = PromptTemplate.fromTemplate(
        "Answer the question as best as possible.\n{format_instructions}\n{question}"
    )

    const chain = prompt
        .pipe(model)
        .pipe(parser);

    const response = await chain.invoke({
        question: "What is the capital of India?",
        format_instructions: parser.getFormatInstructions(),
    });
    console.log(response)
}

// main()

async function main2() {
    const schema = z.object({
        answer: z.string().describe("answer to the user's question"),
        sources: z.array(z.string()).describe("sources used to answer the question"),
    });

    const parser = StructuredOutputParser.fromZodSchema(schema);
    const prompt = PromptTemplate.fromTemplate(`
        Answer the user's question.
        Return only a JSON object that follows the required format.
        Do not return the JSON schema.
        Do not return markdown.
        Do not include explanations outside the JSON object.

        {format_instructions}

        Question: {question}
        `)

    const chain = prompt.pipe(model).pipe(parser)

    const response = await chain.invoke({
        question: "What is the capital of Pakistan?",
        format_instructions: parser.getFormatInstructions()
    })
    console.log(response)
}
main2()