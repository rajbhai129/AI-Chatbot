import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { OpenAI } from "openai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS and static files
app.set("view engine", "ejs");
app.use(express.static(path.resolve("public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure OpenAI
const apiKey = process.env.API_KEY; // Ensure API_KEY is in the .env file
const api = new OpenAI({
  apiKey,
  baseURL: "https://api.aimlapi.com/v1",
});

// Render index page
app.get("/", (req, res) => {
  res.render("index"); // Renders views/index.ejs
});

// Chat route
app.post("/chat", async (req, res) => {
  try {
    const { systemRoll, userPrompt } = req.body;

    // Validate inputs
    if (!systemRoll || !userPrompt) {
      return res.status(400).send({ error: "Both systemRoll and userPrompt are required." });
    }

    const completion = await api.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [
        { role: "system", content: systemRoll },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 256,
    });

    const aiResponse = completion.choices[0].message.content;

    // Render chat.ejs with all necessary data
    res.render("chat", { systemRoll, userPrompt, aiResponse });
  } catch (error) {
    console.error("Error details:", error.response?.data || error.message);
    res.status(500).send({
      error: error.response?.data || "Failed to fetch response from AI/ML API",
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});