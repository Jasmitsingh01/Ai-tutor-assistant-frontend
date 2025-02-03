
const UserResponse = ({question}:{question:string}) => {
  return (
<div className=" w-2/3 md:w-1/4 flex flex-col gap-5 self-end">
                  <div className=" self-end">
                  <img className=' w-[45px] h-[45px] object-cover object-center  rounded-full' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1738492598~exp=1738496198~hmac=7e1179dea01be2a24fd469917fac6899a6ab2958a4bf2465ece6eba39819e665&w=740" alt="user-profile-image"  />
                  </div>

                  <p className=" mx-auto me-0  text-sm">
                    {
                        question
                    }
                  </p>

               </div>  )
}

export default UserResponse