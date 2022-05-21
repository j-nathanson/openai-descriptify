import axios from "axios";

const generatePrompt = (formData) => {
    const { productName, basicDescription, idealUsers, benefits, features } = formData;

    const prompt =
        `Write a product description for an item: 

        Product name: ${productName}
        Basic description: ${basicDescription}
        Ideal Users: ${idealUsers}
        Benefits to the user: ${benefits}
        Features: ${features}`
    return prompt;
}

export const postData = async (formData) => {
    const { engine } = formData;
    const prompt = generatePrompt(formData);

    const requestBody = {
        prompt,
        temperature: 0.5,
        max_tokens: 1004,
        top_p: 1.0,
        frequency_penalty: 1.0,
        presence_penalty: 1.0,
    }

    const config = { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }

    try {
        const res = await axios.post(`https://api.openai.com/v1/engines/${engine}/completions`, requestBody, config);
        return res.data.choices[0].text;
    } catch (error) {
        console.log(error)
    }
}