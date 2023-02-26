
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-DXCKFeMcoeJ4dJ8Flcm161bZ",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choises[0].text)
}
callApi()
//create a simple expree api





