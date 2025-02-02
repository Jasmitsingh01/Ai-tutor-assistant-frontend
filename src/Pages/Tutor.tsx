import { IoIosSend } from "react-icons/io";
import {motion} from 'motion/react'
import { useForm } from "react-hook-form";
// import { useState } from "react";
// interface UserResponse{
  
//     role:string,
//     parts:[string]
  
// }
const Tutor = () => {
  // const [ userResponse,setUserResponse]=useState<Array<UserResponse>| undefined>()
  const { register}=useForm({
    defaultValues:{
      question:""
    }
  })
  return (
    <div className=" flex flex-col justify-between w-full h-full">

         <div className=" border-2 rounded-md flex flex-col p-5 items-center gap-10 overflow-y-auto  h-[calc(100vh-200px)] mb-4 ">
                {/* user response */}
               <div className=" w-2/3 md:w-1/4 flex flex-col gap-5 self-end">
                  <div className=" self-end">
                  <img className=' w-[45px] h-[45px] object-cover object-center  rounded-full' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1738492598~exp=1738496198~hmac=7e1179dea01be2a24fd469917fac6899a6ab2958a4bf2465ece6eba39819e665&w=740" alt="user-profile-image"  />
                  </div>

                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus aliquam odio perferendis repellat earum consectetur mollitia dolorum, ducimus animi modi, eaque veniam inventore in! Perferendis velit commodi eius. Atque quia fuga omnis ab similique laboriosam, ipsa nam eos dicta temporibus esse voluptatem beatae autem nulla explicabo nobis adipisci ea assumenda provident, minus quas. Veritatis nulla incidunt consequatur ducimus quia fugit velit dolorum optio enim maxime officiis aperiam itaque nisi eveniet, sed officia saepe, sit iste, dicta reprehenderit. Reiciendis ipsam aperiam sequi culpa officiis accusantium quisquam quae natus minima, facere voluptates unde provident est fugiat maiores magni dicta nihil illo eligendi?
                  </p>

               </div>
                {/* user response end */}

                {/* bot response */}
               <div className="  flex flex-col gap-5 self-start">
                  <div className=" self-start">
                  <img className=' w-[45px] h-[45px] object-cover object-center  rounded-full' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1738492598~exp=1738496198~hmac=7e1179dea01be2a24fd469917fac6899a6ab2958a4bf2465ece6eba39819e665&w=740" alt="bot-profile-image"  />
                  </div>

                  <p className=" text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus aliquam odio perferendis repellat earum consectetur mollitia dolorum, ducimus animi modi, eaque veniam inventore in! Perferendis velit commodi eius. Atque quia fuga omnis ab similique laboriosam, ipsa nam eos dicta temporibus esse voluptatem beatae autem nulla explicabo nobis adipisci ea assumenda provident, minus quas. Veritatis nulla incidunt consequatur ducimus quia fugit velit dolorum optio enim maxime officiis aperiam itaque nisi eveniet, sed officia saepe, sit iste, dicta reprehenderit. Reiciendis ipsam aperiam sequi culpa officiis accusantium quisquam quae natus minima, facere voluptates unde provident est fugiat maiores magni dicta nihil illo eligendi?
                  </p>

               </div>
                {/* bot response end */}
         </div>



           <div className=" flex items-center   place-items-end">
           < textarea { ...register('question', { required: true }) }  placeholder="Start Typing .... " className="  resize-none outline-none border-2 scrollbar-hide overflow-auto w-full p-2 pr-14 rounded-md " />
           <motion.button
           
          whileTap={{
            scale:0.8
          }} 
           
           type="submit" className=" border-2 bg-[#072448] text-white p-2 rounded-full absolute right-6 text-2xl">
            <IoIosSend/>
           </motion.button>


           </div>





    </div>
  )
}

export default Tutor