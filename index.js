
const { Configuration, OpenAIApi } = require("openai");
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")


const app = express()
app.use(bodyParser.json())
app.use(cors())

const configuration = new Configuration({
    organization: "org-gP97OR8b5YqJVEFqydpD5Hmp",
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

//Create a simple function that calls the function above
const port = 3080
app.post("/",async (req, res) => {
  const {message} = req.body

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });
      // console.log(response.data.choices[0].text)
      res.json({
        // data: response.data
         message: response.data.choices[0].text
      })
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`App is listening on port ${port}`)
})