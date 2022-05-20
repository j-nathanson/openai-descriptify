import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function postData(data) {
    const { engine } = data;
    const prompt = generatePrompt(data);
    try {
        const completion = await openai.createCompletion(`${engine}`, {
            prompt,
            temperature: 0.5,
            max_tokens: 1004,
            top_p: 1.0,
            frequency_penalty: 1.0,
            presence_penalty: 1.0,
        });
        return completion.data.choices[0].text
    } catch (error) {
        console.log(error);
        alert("Could not connect to API");
    }
}


function generatePrompt(data) {
    const { productName, basicDescription, idealUsers, benefits, features, } = data;

    const prompt =
        `Write a product description for an item: 

        Product name: ${productName}
        Basic description: ${basicDescription}
        Ideal Users: ${idealUsers}
        Benefits to the user: ${benefits}
        Features: ${features}`
    return prompt;
}