import React, { useState, useRef } from "react";
import AceEditor from "react-ace";
import { useMutation } from "@tanstack/react-query";
import { chat } from "../lib/api"; // Or your API client import
import isEqual from 'lodash/isEqual';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

interface CodingQuestionProps {
  question: string;
  starterCode: string;
  expectedOutput?: string; // Optional expected output for verification
}

const PythonCodingQuestion: React.FC<CodingQuestionProps> = ({ question, starterCode, expectedOutput }) => {
  const [userCode, setUserCode] = useState(starterCode);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: { code: string }) => {
      setIsLoading(true);
      try {
        const response = await chat.post("/runcode", data);
        
        return response.data;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: (data) => {
        setOutput(data?.output);
        setError(null);
  
        if (expectedOutput) {
          try {
            // 1. Process program output:
            const programOutput = String(data?.output).trim().replace(/\r\n|\r|\n/,''); // Trim whitespace
            const outputLines = programOutput.split(/\r\n|\r|\n/); // Split by newlines
  
            // Attempt to convert each line to a number, otherwise keep it as a string.
            
            // 2. Normalize and compare:
            const normalizedUserOutput = JSON.parse(outputLines.join(''));
            const normalizedExpectedOutput = expectedOutput.trim();

            setIsCorrect(isEqual(normalizedExpectedOutput,normalizedUserOutput));
          } catch (e) {
            console.error("Error processing output:", e);
            setIsCorrect(false); // Set to incorrect if processing fails.
          }
        } else {
          setIsCorrect(null);
        }
      },
    onError: (err: any) => {
      if (err.response) {
        console.error("Error details:", err.response.data.detail || err.response.data || err.message);
        setError(err.response.data.detail || String(err.response.data) || err.message);
      } else if (err.request) {
        console.error("Request error:", err.message);
        setError("No response received. Please check your network connection.");
      } else {
        console.error("General error:", err.message);
        setError(err.message);
      }
      setOutput(null);
      setIsCorrect(null);
    },
  });

  const editorRef = useRef<any>(null);

  const handleCodeChange = (newCode: string) => {
    setUserCode(newCode);
  };

  const runCode = () => {
    setOutput(null);
    setError(null);
    setIsCorrect(null);
    mutate({ code: userCode });
  };

  return (
    <div className="border rounded-lg p-6 shadow-md relative">
      <h2 className="text-2xl text-center font-bold mb-4">Python Coding Question</h2>
      <p className="mb-4">{question}</p>

      <div className="ace-editor-container">
        <AceEditor
          mode="python"
          theme="solarized_light"
          width="100%"
          height="300px"
          value={userCode}
          onChange={handleCodeChange}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 4,
          }}
          ref={editorRef}
        />
      </div>

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={runCode}
        disabled={isLoading}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>

      {output && (
        <div className="mt-4 border rounded p-2 bg-gray-100">
          <pre>{output}</pre>
          {isCorrect !== null && (
            <p className={`mt-2 font-medium ${isCorrect ? "text-green-500" : "text-red-500"}`}>
              {isCorrect ? "Correct!" : "Incorrect."}
            </p>
          )}
        </div>
      )}

      {error && (
        <div className="mt-4 border rounded p-2 bg-red-100">
          <p className="text-red-500 font-medium">Error:</p>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
};

export default PythonCodingQuestion;