import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const naviagte = useNavigate();
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">AI Tutor Assistant</h1>
        </div>
      </header>
      <main>
        <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">AI Tutor Frontend (Vite & React TypeScript)</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              This repository contains the frontend component of an AI Tutor
              Assistant application. It's built using React, TypeScript, and
              uses various libraries like `react-hook-form`, `zod`, `motion`,
              and `react-icons`. The application facilitates a chat-like
              interface where users can ask questions, and the AI (connected via
              API calls) provides responses. The responses can include regular
              text messages and also structured question sets for the user to
              interact with.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Key Features</h3>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>Interactive chat interface with user and bot responses.</li>
                <li>
                  Support for structured question sets (MCQ, Fill in the Blanks,
                  Coding Questions).
                </li>
                <li>Form validation using Zod and React Hook Form.</li>
                <li>Animated UI elements with Motion.</li>
                <li>Icon integration using React Icons.</li>
                <li>
                  Asynchronous API call handling with loading and error states.
                </li>
                <li>Clean and organized code structure.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Technologies Used</h3>
              <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
                <li>React</li>
                <li>TypeScript</li>
                <li>React Hook Form</li>
                <li>Zod</li>
                <li>Motion</li>
                <li>React Icons</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Project Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                The project is structured with components for user responses,
                bot responses, and the main chat interface. It also includes API
                call handling (mutations) and utilizes a schema for form
                validation.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2">Setup and Installation</h3>
              <p className="text-gray-700 leading-relaxed">
                To run this project locally, you'll need to have Node.js and npm
                (or yarn) installed. Clone the repository, navigate to the
                project directory, and then follow the instructions in the
                repository's README file. This will typically involve installing
                dependencies and starting the development server.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Check the README file for detailed instructions:{" "}
                <a
                  href="https://github.com/Jasmitsingh01/skc_jasmit_singh_Ai-tutor-assistant-frontend"
                  className="text-blue-500 underline"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
          </div>
        </section>
       <section>
       <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">AI Tutor Backend (FastAPI & Gemini)</h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        This repository contains the backend component of an AI Tutor application, built using FastAPI and leveraging the Gemini API for AI assistance. It provides an API endpoint to receive user questions, interact with the Gemini model, and return responses, including structured question sets.
      </p>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Key Features</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>FastAPI framework for high-performance API.</li>
          <li>Integration with the Gemini API for AI question answering.</li>
          <li>Endpoint to handle user questions and generate AI responses.</li>
          <li>Generation of structured question sets (MCQ, Fill in the Blanks, Coding Questions).</li>
          <li>Clear separation of concerns for maintainability.</li>
          <li>Asynchronous request handling for efficient processing.</li>
          <li>Comprehensive documentation (check the repository's README).</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Technologies Used</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Python</li>
          <li>FastAPI</li>
          <li>Gemini API</li>
          <li>Uvicorn (for development server)</li>
          <li>Pydantic (for data validation)</li>
          <li>(Other dependencies as listed in `requirements.txt`)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Project Structure</h3>
        <p className="text-gray-700 leading-relaxed">
          The project is structured to separate API routes, Gemini interaction logic, and data models.  It typically includes:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>`main.py` (or similar): Main application file, defines API routes.</li>
          <li>`gemini_api.py` (or similar): Handles communication with the Gemini API.</li>
          <li>`models.py` (or similar): Defines data models using Pydantic.</li>
          <li>`requirements.txt`: Lists project dependencies.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Setup and Installation</h3>
        <p className="text-gray-700 leading-relaxed">
          To run this project locally, you'll need to have Python installed. Clone the repository, navigate to the project directory, and install the required dependencies using pip:
        </p>
        <pre className="bg-gray-200 rounded-md p-4 mt-2">
          <code>pip install -r requirements.txt</code>
        </pre>
        <p className="text-gray-700 leading-relaxed mt-4">
          Then, start the development server using Uvicorn:
        </p>
        <pre className="bg-gray-200 rounded-md p-4 mt-2">
          <code>uvicorn main:app --reload</code>
        </pre>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Check the README file for detailed instructions: <a href="https://github.com/Jasmitsingh01/Ai-tutor-backend-fastApi-gemini" className="text-blue-500 underline">GitHub Repository</a>
        </p>

      </div>
    </div>
       </section>
        <motion.button
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          onClick={() => naviagte("/ask")}
          className="bg-blue-500 my-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mx-auto block p-2.5 text-white font-semibold rounded-md"
        >
          Continue to App
        </motion.button>
      </main>

      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; 2025 Jasmit Singh</p>
      </footer>
    </>
  );
};

export default Index;
