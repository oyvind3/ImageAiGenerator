const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/wines', async (req, res) => {

    const {prompt, n} = req.query;
    const response = await openai.createImage({
        prompt: `${prompt}`,
        n: parseInt(n, 10),
        size: "256x256"
      });
        
  res.send(response.data.data.map((data) => data.url));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})