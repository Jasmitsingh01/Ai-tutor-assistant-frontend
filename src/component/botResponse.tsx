import { useEffect,useState } from "react";
import { TypeAnimation } from "react-type-animation";
import MCQ from "./MCQ";
import FillInTheBlank from "./Fill_in_the_blank";
import PythonCodingQuestion from './Coding'
interface Question {
  type: string;
  question: string;
  options?: { [key: string]: string };
  answer?: string;
  solution?: string;
  example_input?: string;
  expected_output?: string;
}

const BotResponse = ({ question, message }: { question?: Question[]; message: string }) => {
  const [questionsToRender, setQuestionsToRender] = useState<Question[] | null>(null); // New state



  useEffect(() => {
    // Update questionsToRender when the question prop changes
    if (question) {
      setQuestionsToRender(question);
    } else {
      setQuestionsToRender(null)
    }
  }, [question]); 
  console.log(question)
  return (
    <div className="flex flex-col gap-5 self-start">
      <div className="self-start">
        <img
          className="w-[45px] h-[45px] object-contain object-center rounded-full"
          src="https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1"
          alt="bot-profile-image"
        />
      </div>

      <pre className="font-sans text-wrap break-words text-sm">
        <TypeAnimation
          sequence={[message]}
          speed={80}
          style={{ fontSize: "1em" }}

        />
      </pre>

<div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {  questionsToRender && questionsToRender?.length > 0 ? (
          questionsToRender?.map((q, index) => {
            if(q.type =="MCQ"){
              return <div key={index}> <MCQ question={q.question}  correctAnswer={q?.answer || ''} options={Object.values(q?.options || {})}/></div>
            }
            if(q.type =="Fill in the Blank"){
              return <div key={index}> <FillInTheBlank text={q.question}  answer={q?.answer || ''} /></div>
            }
            if(q.type =="Coding Question"){
              return <div key={index} className=" md:col-span-2"> <PythonCodingQuestion question={q.question}   starterCode="print('Hello world !')"/></div>
            }
          })
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BotResponse;