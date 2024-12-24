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

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/ai-chatbot.git
cd ai-chatbot
2. Install Dependencies
bash
Copy code
npm install
3. Create .env File
Add your API key to a .env file in the root directory:

env
Copy code
API_KEY=your-api-key-here
4. Start the Server
bash
Copy code
npm start
5. Test the Chatbot Locally
You can test the chatbot by making POST requests to the /chat endpoint using tools like Postman or curl. Example payload:

json
Copy code
{
  "systemContent": "You are a coding assistant.",
  "userContent": "Generate a Fibonacci function in C++."
}
Deployment on Vercel
1. Push Your Code to GitHub
Upload your project repository to GitHub.

2. Link GitHub Repository with Vercel
Go to Vercel and log in.
Click Import Project and select Git Repository.
Follow the prompts to link your GitHub repository.
3. Configure Environment Variables
In your Vercel dashboard, navigate to Settings > Environment Variables.
Add the API_KEY environment variable with the same value as your .env file.
4. Deploy
Click on Deploy in Vercel. Your chatbot will be live once the build is complete.

Sample Endpoints
POST /chat
Generate AI responses based on user and system prompts.

Request Example
json
Copy code
{
  "systemContent": "You are a helpful assistant.",
  "userContent": "What is the capital of France?"
}
Response Example
json
Copy code
{
  "result": "The capital of France is Paris."
}
Project Structure
plaintext
Copy code
.
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
├── .env              # API key (not included in version control)
├── .gitignore        # Ensures sensitive files are not pushed to Git
└── README.md         # Project documentation
Protecting Your API Key
Use the dotenv package to store your API key in a .env file.
Add .env to your .gitignore to prevent it from being uploaded to version control.
Use environment variables (e.g., via Vercel) in production to keep the API key secure.
Contributing
Contributions are welcome! Please create a pull request with your changes and ensure it follows the project's structure.

License
This project is licensed under the MIT License.

