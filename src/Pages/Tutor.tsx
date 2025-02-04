import { IoIosSend } from "react-icons/io";
import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import UserResponse from "../component/userResponse";
import BotResponse from "../component/botResponse";
import ChatMutation from "../lib/mutations/tutor/chat";

interface Chat {
  question: string;
}

interface Message {
  role: string;
  parts: string[];
}

interface Question {  // Corrected interface name to singular Question
  type: string;
  question: string;
  option?: object;
  answer?: string;
  solution?: string;
  example_input?: string;
  expected_output?: string;
}

const chatSchema = z.object({
  question: z.string().min(1, "Please enter a question"),
});

const Tutor = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [questions, setQuestions] = useState<Question[][]>([[]]); // Corrected state name to questions
  const { mutate, data, isError, error, isPending } = ChatMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Chat>({
    resolver: zodResolver(chatSchema),
  });
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const onSubmit: SubmitHandler<Chat> = (data) => {
    const trimmedQuestion = data.question.trim(); // Store trimmed question

    if (trimmedQuestion === "") return;

    setMessages([
      ...messages,
      { role: "user", parts: [trimmedQuestion] },
    ]);

    mutate({ question: trimmedQuestion });
    reset();
  };

  useEffect(() => {
    if (data && data.response) {
      try {
        const parts = data.response.split('json');
        const messagePart = parts[0].trim();

        setMessages([...messages, { role: "bot", parts: [messagePart] }]);

        const questionsPart = parts[1]?.replace(/```/g, '')?.replace(/\n/g, '')?.trim();
        const parsedQuestions: Question[] = questionsPart ? JSON.parse(questionsPart) : [];

        setQuestions((prevQuestions) => [...prevQuestions, parsedQuestions]); // Add to existing questions

      } catch (error) {
        console.error("Error parsing JSON or processing response:", error);
        setQuestions([[]]); // Reset questions on error
      }
    }
  }, [data?.response, messages]); // Added messages to dependency array


  useEffect(() => {
    if (isError) {
      console.error("API Error:", error);
      setMessages([
        ...messages,
        { role: "bot", parts: ["Error: Could not get a response. Please try again later."] },
      ]);
    }
  }, [isError, error, messages]); // Added messages to dependency array

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div
        ref={chatContainerRef}
        className="border-2 rounded-md flex flex-col p-5 gap-10 overflow-x-hidden overflow-y-auto h-[calc(100vh-200px)] mb-4"
      >
        {messages.map((message, index) => (
          <div key={index} className="flex flex-col w-full">
            {message.role === "user" ? (
              <UserResponse question={message.parts.join("").replace(/^[a-z]/, (m) => m.toUpperCase())} />
            ) : (
              <BotResponse question={questions[index] || []} message={message.parts.join("").replace(/^[a-z]/, (m) => m.toUpperCase())} /> // Provide default empty array
            )}
          </div>
        ))}

        {isPending && (
          <div className="flex flex-col w-full gap-5 self-start p-4">
            <div className="flex flex-col w-full animate-pulse space-x-4">
              <div className="size-10 rounded-full bg-gray-200"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                    <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                  </div>
                  <div className="h-2 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isError && <div className="text-red-500">API Error. Please try again.</div>}
      </div>

      <form className="flex items-center place-items-end" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("question", { required: true })}
          placeholder="Start Typing .... "
          className={`resize-none outline-none border-2 scrollbar-hide overflow-auto w-full p-2 pr-14 rounded-md ${errors.question ? 'border-red-500' : ''}`}
        />
        {errors.question && <p className="text-red-500">{errors.question.message}</p>}

        <motion.button
          whileTap={{ scale: 0.8 }}
          type="submit"
          className="border-2 bg-[#072448] text-white p-2 rounded-full absolute right-6 text-2xl"
        >
          <IoIosSend />
        </motion.button>
      </form>
    </div>
  );
};

export default Tutor;