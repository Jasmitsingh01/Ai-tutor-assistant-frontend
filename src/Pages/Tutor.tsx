import { IoIosSend } from "react-icons/io";
import { motion } from "motion/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react"; // Import useRef
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
interface questions{
  type:string,
  question:string,
  option?:object,
  answer?:string,
  solution?:string
  example_input?:string,
  expected_output?:string
}
const chatSchema = z.object({ // Corrected typo: chatShema to chatSchema
  question: z.string().min(1, "Please enter a question"), // Added min length validation
});

const Tutor = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question,setQuestion]=useState<questions[]>([]);
  const { mutate, data, isError, error,isPending } = ChatMutation(); // Added isError and error
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Chat>({
    resolver: zodResolver(chatSchema),
  });
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref for scrolling
  const onSubmit: SubmitHandler<Chat> = (data) => {
    if (data.question.trim() === "") return;
    setMessages([
      ...messages,
      { role: "user", parts: [data.question.trim()] }, // Trim user input
    ]);

    mutate({ question: data.question.trim() }); // Trim question sent to the API
    reset();
  };

  useEffect(() => {
    if (data && data.history) {
      data.history.forEach((item: { role: string; parts: string[] }) => {
        if (item.role === "model") {
          item.parts.forEach(part => {
            try {
              const parsedResponse = JSON.parse(part || "{}");

              let botResponse = "";

              if (typeof parsedResponse === 'object' && parsedResponse !== null) {
                for (const key in parsedResponse) {
                  if (parsedResponse.hasOwnProperty(key)) {
                    if (!key.includes("question")) { // Exclude questions here
                      botResponse += `${key}:\n`;

                      if (Array.isArray(parsedResponse[key])) {
                        parsedResponse[key].forEach(arrayItem => {
                          let itemText = "";

                          if (typeof arrayItem === "object" && arrayItem !== null) {
                            for (const iKey in arrayItem) {
                              itemText += `${iKey}: ${arrayItem[iKey]}\n`;
                            }
                          } else {
                            itemText = arrayItem ? arrayItem.toString() : "";
                          }

                          botResponse += `${itemText}\n`;
                        });
                      } else if (typeof parsedResponse[key] === 'object' && typeof parsedResponse[key] !== null) {
                        for (const iKey in parsedResponse[key]) {
                          botResponse += `${iKey}: ${parsedResponse[key][iKey]}\n`;
                        }
                      } else {
                        botResponse += `${parsedResponse[key] ? parsedResponse[key].toString() : ""}\n`;
                      }
                    } else { // Handle questions separately
                      setQuestion( [
                       
                        ...parsedResponse[key] // Spread questions into state
                      ]);
                    }
                  }
                }
              } else if (typeof parsedResponse === 'string') {
                botResponse = parsedResponse;
              } else {
                botResponse = JSON.stringify(parsedResponse);
              }

              setMessages(prevMessages => [
                ...prevMessages,
                { role: "bot", parts: [botResponse.trim()] }
              ]);

            } catch (parseError) {
              console.error("Error parsing JSON:", parseError, part);
              setMessages(prevMessages => [...prevMessages, { role: "bot", parts: ["Error parsing response."] }]);
            }
          });
        }
      });
    }
  }, [data?.history]);






  useEffect(() => {
    if (isError) {
      console.error("API Error:", error); 
      
      setMessages([
        ...messages,
        { role: "bot", parts: ["Error: Could not get a response. Please try again later."] },
      ]);
    }
  }, [isError, error, messages]);
console.log(question)
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div
        ref={chatContainerRef} 
        className="border-2 rounded-md flex flex-col p-5 gap-10 overflow-x-hidden overflow-y-auto h-[calc(100vh-200px)] mb-4"
      >
   
{
        messages.map((message, index) => (
          <div key={index} className=" flex flex-col w-full">
            {message.role === "user" ? (
              <UserResponse question={message.parts.join("").replace(/^[a-z]/, function(m){ return m.toUpperCase() })} />
            ) : (
              <BotResponse question={question} message={message.parts.join("").replace(/^[a-z]/, function(m){ return m.toUpperCase() })} />
            )
             
            
            }

          </div>
        ))
        
        
        }

{
        isPending && <div className=" flex  flex-col w-full gap-5 self-start p-4">
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
}
        {/* {isLoading && <div>Loading...</div>} */}
        {isError && <div className="text-red-500">API Error. Please try again.</div>} 
      </div>

      <form className="flex items-center place-items-end" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("question", { required: true })}
          placeholder="Start Typing .... "
          className={`resize-none outline-none border-2 scrollbar-hide overflow-auto w-full p-2 pr-14 rounded-md ${errors.question ? 'border-red-500' : ''}`} // Conditional styling for errors
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