import React, { useState } from "react";
import Draggable, { DraggableEvent } from "react-draggable";

interface FillInTheBlankProps {
  text: string;
  answer: string; // Now a single answer (string)
}

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({ text, answer }) => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null); // Single answer state

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleOnDrop = (event: DraggableEvent, droppedAnswer: string) => {
    event;
    setUserAnswer(droppedAnswer);
  };

  const handleDrag = (
    event: DraggableEvent,
    ui: any,
    droppedAnswer: string
  ) => {
    // No need to track positions if there is only one answer. You can remove this if you want.
    event;
    droppedAnswer;
    ui;
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

      <div className="draggable-answers flex flex-wrap gap-2">
        <Draggable
          onStop={(event: DraggableEvent) => handleOnDrop(event, answer)}
          onDrag={(event: DraggableEvent, ui) => handleDrag(event, ui, answer)}
        >
          <div className="border rounded px-2 py-1 cursor-grab">{answer}</div>
        </Draggable>
      </div>

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
