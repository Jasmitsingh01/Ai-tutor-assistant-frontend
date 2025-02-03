import { TypeAnimation } from "react-type-animation";

interface questions {
  type: string;
  question: string;
  option?: object;
  answer?: string;
  solution?: string;
  example_input?: string;
  expected_output?: string;
}
const BotResponse = ({
  question,
  message,
}: {
  question?: questions[];
  message: string;
}) => {
  console.log(question);
  return (
    <div className="  flex flex-col gap-5 self-start ">
      <div className=" self-start">
        <img
          className=" w-[45px] h-[45px] object-cover object-center  rounded-full"
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1738492598~exp=1738496198~hmac=7e1179dea01be2a24fd469917fac6899a6ab2958a4bf2465ece6eba39819e665&w=740"
          alt="bot-profile-image"
        />
      </div>

      <pre className=" font-sans    text-wrap break-words text-sm">
        <TypeAnimation
          sequence={[message]}
          speed={80}
          style={{ fontSize: "1em" }}
        />
      </pre>
      {question?.map((question) => {
        if (question.type == "MCQ") {
          return <div>MCQ</div>;
        }
        if (question.type == "fill_in_blank") {
          return <div>fill_in_blank</div>;
        }

        if (question.type == "coding_question") {
          return <div>coding question</div>;
        }
      })}
    </div>
  );
};

export default BotResponse;
