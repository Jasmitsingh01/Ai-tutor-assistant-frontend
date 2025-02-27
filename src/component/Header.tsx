import React from 'react'
import { AiOutlineMenuUnfold , AiOutlineMenuFold } from "react-icons/ai";
import { motion } from 'motion/react';
const Header = () => {
  const [menu,setmenu]=React.useState(false);
  return (
    <header className=' w-full bg-background p-4 fixed  '>
      <div className=' flex items-center justify-between'>
      <div onClick={()=>setmenu(!menu)} className=' flex items-center gap-5 p-1'>
      <button  className=' hidden md:block text-2xl'>
        {
          menu ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>
        }
      </button>
      <h1 className=' font-semibold  font-mono select-none'>Ai.Py Tutor</h1>
      </div>
      <img className=' w-[45px] h-[45px] object-cover object-center  rounded-full' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1738492598~exp=1738496198~hmac=7e1179dea01be2a24fd469917fac6899a6ab2958a4bf2465ece6eba39819e665&w=740" alt="user-profile-image"  />
      </div>
      {/* Side bar start */}
      <motion.div
      initial={{
        left:-400
      }}
      animate={{
        left: menu ? 0 :-400
      }}
      className={`absolute z-[9999] w-[400px] h-[calc(100vh-70px)]   top-[76px] bg-red-500`}>
        

         
     Side bar


      </motion.div>
      {/* Side bar end */}
    </header>
  )
}

export default Header