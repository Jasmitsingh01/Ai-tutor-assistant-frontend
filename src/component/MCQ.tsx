import React, { useState, useRef } from "react";
import Draggable, { DraggableEvent } from "react-draggable";

interface MCQProps {
  options?: string[];
  question: string;
  correctAnswer: string;
}

const MCQ: React.FC<MCQProps> = ({ options, question, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleOnDrop = (option: string) => {
    setSelectedAnswer(option);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="border rounded-lg p-6 shadow-md relative">
      {" "}
      {/* Relative for container */}
      <h2 className="text-2xl text-center font-bold mb-4">MCQ</h2>
      <p className="font-bold text-xl text-right mb-4">5 marks</p>
      <h3 className="font-semibold italic mb-4">Q - {question}</h3>
      <div className="options-container relative">
        {" "}
        {/* Relative for bounds */}
        <ul className="flex flex-col gap-3 capitalize ">
          {options?.map((option, index) => {
            const [position, setPosition] = useState({ x: 0, y: 0 });
            const draggableRef = useRef<HTMLDivElement>(null);

            const handleDrag = (event: DraggableEvent, ui: any) => {
                event;
              setPosition({ x: ui.x, y: ui.y });
            };

            return (
              <Draggable
                key={index}
                onStop={() => handleOnDrop(option)}
                position={position}
                onDrag={handleDrag}
                nodeRef={draggableRef}
                bounds="parent" // Bounds to options-container now
              >
                <div ref={draggableRef} className="draggable-item px-2">
                  <li className="p-2 border border-blue-800 rounded-md cursor-grab">
                    {option}
                  </li>
                </div>
              </Draggable>
            );
          })}
          <p
            className={`mt-4 font-medium border-2 px-5 py-14 ${
              isCorrect ? "text-green-500" : "text-red-500"
            }`}
          >
            {selectedAnswer
              ? isCorrect
                ? "Correct!"
                : "Incorrect. Try again."
              : " Drag Correct Option Here !"}
          </p>
        </ul>
      </div>{" "}
      {/* Closing options-container */}
    </div>
  );
};

export default MCQ;
