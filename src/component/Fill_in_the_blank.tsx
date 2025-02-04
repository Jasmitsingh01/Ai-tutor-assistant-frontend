import React, { useState } from "react";

interface FillInTheBlankProps {
  text: string;
  answer: string; // Now a single answer (string)
}

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ text, answer }) => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null); // Single answer state
  console.log(answer)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };


  const isCorrect = userAnswer?.toLowerCase() === answer.toLowerCase(); // Correctness check

  const textParts = text.split(/(_+)/);

  return (
    <div className="border rounded-lg p-6 shadow-md relative">
      <h2 className="text-2xl text-center font-bold mb-4">Fill in the Blank</h2>

      <p className="mb-4">
        {textParts.map((part, index) => {
          if (part.startsWith("_")) {
            return (
              <input
                key={index}
                type="text"
                className="border rounded px-2 py-1 mx-1"
                value={userAnswer || ""} // Use userAnswer, not userAnswers[index]
                onChange={handleInputChange} // No index needed
              />
            );
          } else {
            return <span key={index}>{part}</span>;
          }
        })}
      </p>

     

      <p
        className={`mt-4 font-medium ${
          isCorrect ? "text-green-500" : "text-red-500"
        }`}
      >
        {userAnswer
          ? isCorrect
            ? "Correct!"
            : "Incorrect. Try again."
          : "Fill in the blank"}
      </p>
    </div>
  );
};

export default FillInTheBlank;
