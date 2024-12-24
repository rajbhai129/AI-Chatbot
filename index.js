import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Fetch API key from environment variables
const apiKey = process.env.API_KEY;
const baseURL = "https://api.aimlapi.com/v1";

app.post("/chat", async (req, res) => {
  try {
    const { systemContent, userContent } = req.body;

    const response = await axios.post(
      `${baseURL}/chat/completions`,
      {
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          { role: "system", content: systemContent },
          { role: "user", content: userContent },
        ],
        temperature: 0.7,
        max_tokens: 256,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`, // Use API key securely
        },
      }
    );

    res.status(200).send({
      result: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).send({
      error: "Failed to fetch response from AI/ML API",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
