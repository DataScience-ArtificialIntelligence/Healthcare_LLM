# 🏥 LLM Performance Comparison in a Healthcare App

## 📌 Project Overview
This project compares the performance of various **Large Language Models (LLMs)** integrated into a healthcare-focused app. It applies **software engineering principles** to evaluate LLMs across multiple metrics and platforms.

---

## 🎯 Application Use Case
The app allows users to input **healthcare-related questions**, which are processed by both **cloud-based** and **local LLMs**, enabling a detailed **performance comparison**.

---

## 🚀 Objectives

### 1️⃣ Develop the App
- Build an interactive, secure app for healthcare-related chat with LLMs.
- Include **cloud-based APIs** (e.g., OpenAI, Gemini, Claude, Grok) and **local models**.

### 2️⃣ Integrate Multiple LLMs
- Compare models from:
  - **Cloud-based**: OpenAI (ChatGPT), Gemini, Claude, Grok.
  - **Local**: bioGPT, LLama-3.1 (1B).

### 3️⃣ Test Across Devices & Conditions
- Evaluate performance on **mobile**, **laptop**, **cloud VMs**, and **edge devices**.
- Simulate **varied network conditions** to test reliability and latency.

### 4️⃣ Measure Key Metrics
- ⏱ **Response Time**  
- 🎯 **Accuracy & Relevance**
- 🧠 **Resource Usage** (CPU, RAM, GPU)
- 🚧 **Latency & Delay Analysis**

### 5️⃣ Visualize Data
- Collect and analyze results using **charts, graphs, and tables**.

---

## 🛠️ Technologies Used

### 🔹 Primary Language
- **TypeScript**

### 🔹 IDE
- **Visual Studio Code (VSCode)**

### 🔹 Frontend
- **React Native** – UI development  
- **Zustand** – State management  
- **Ky** – HTTP requests  
- **Gluestick** – UI component library  
- **Firebase Auth** – Authentication  

### 🔹 Backend
- **Express.js** – API and service handling  
- **Mongoose (ORM)** – MongoDB interaction  
- **Axios** – Internal and external HTTP requests

### 🔹 Database
- **MongoDB**

### 🔹 Microservices
- **Express.js** – Microservice framework  
- **LLM SDKs/APIs** – Official packages from OpenAI, Anthropic, Google, etc.

---

## 📲 How to Use the App

1. **Sign in** with your credentials via Firebase.
2. Fill in patient details (Name, Age, Height, Weight, Symptoms).
3. Tap **Start Chatting**.
4. Choose your preferred LLM from the dropdown.
5. Begin the conversation and **compare results** across models.

> 🔐 If a signed-out user tries to access any protected page (like the form or chat), the app **redirects them to the Sign-In screen**.

---

## 🧑‍💻 User Features

- 🧾 Fetch & **resume previous chat sessions**.
- 🧠 Compare different model responses on identical queries.
- 📈 View **performance stats** and **model efficiency** insights.

---

## 📊 Expected Outcomes

- In-depth analysis of **cloud vs. local LLMs** in a real-world app.
- Software engineering insights into **LLM integration**.
- Visualization dashboards to present the performance metrics.

---

## 🧱 Architecture Diagrams

> ✅ Updated versions of the following diagrams are required:
- Class Diagrams (Class & Class2)
- Activity Diagram
- State Diagram
- Network Architecture Diagram
- Sequence Diagram (with correct tools and tech stack)

### 🔁 Auth Flow (Activity/State Diagram)
1. User opens the app → lands on homepage.
2. Clicks button to go to form.
3. If **not signed in** → auto redirected to **Sign-In** page.

---

## 🗃️ Entity-Relationship (ER) Diagram

```txt
User
- email: string
- password: string
- firebaseId: string
- chats: [chat ids]

Chat
- firebaseId: string (owner id)
- title: string
- prompts: [prompt ids]
- responses: [response ids]

Prompt
- chat: id
- askedAt: Date
- text: string

Response
- chat: id
- repliedAt: Date
- text: string
- generatedBy: string (e.g., ChatGPT, Claude)
