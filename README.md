# **AI Chatbot**

This project is a conversational chatbot powered by the AI/ML API. It accepts user and system prompts and generates responses using a language model. The chatbot can act as various assistants, like a coding helper, travel advisor, or general conversationalist.

---

## **Features**
- Accepts user and system prompts.
- Generates responses using AI/ML API.
- Dynamically customizable behavior (e.g., Coding Assistant, Travel Agent, etc.).
- Securely handles API keys using environment variables.
- Deployed on Vercel for easy access.

---

## **Tech Stack**
- **Backend Framework**: Express.js
- **Programming Language**: JavaScript (ES6+)
- **HTTP Client**: Axios
- **Environment Variable Management**: dotenv
- **Deployment**: Vercel

---

## **Setup Instructions**

1. Clone the Repository
    ```bash
    git clone https://github.com/rajbhai129/AI-Chatbot.git
    cd AI-Chatbot
    ```

2. Install Dependencies
    ```bash
    npm install
    ```

3. Create .env File
    Add your API key to a .env file in the root directory:
    ```env
    API_KEY=your_api_key_here
    ```

4. Push Your Code to GitHub
    Upload your project repository to GitHub.

5. Link GitHub Repository with Vercel
    - Go to Vercel and log in.
    - Click Import Project and select Git Repository.
    - Follow the prompts to link your GitHub repository.

6. Configure Environment Variables
    - In your Vercel dashboard, navigate to Settings > Environment Variables.
    - Add the `API_KEY` environment variable with the same value as your .env file.

7. Deploy
    - Click on Deploy in Vercel. Your chatbot will be live once the build is complete.

---

## **Sample Endpoints**

### POST /chat
Generate AI responses based on user and system prompts.

**Request Example**
```json
{
  "systemContent": "You are a helpful assistant.",
  "userContent": "What is the capital of France?"
}