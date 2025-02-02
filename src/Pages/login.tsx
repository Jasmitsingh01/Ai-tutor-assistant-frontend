// src/components/LoginForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data); 
  };

  return (
   <main className=' bg-background fixed min-h-screen w-full flex flex-col justify-center items-center'>
     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md  w-full  mx-auto mt-10 p-6 text-[#072448]   ">
      <h2 className="text-2xl text-center italic    font-semibold mb-4">Welcome back !</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block   font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-3 py-2 border outline-none rounded-md ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block   font-bold mb-2">Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={`w-full px-3 py-2 border outline-none rounded-md ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <motion.button initial={{
        scale:1
      }} whileHover={{
        scale:1.1
      }} type="submit" className="w-full bg-transparent border-2 hover:bg-[#072448] hover:text-white hover:border-0 font-bold py-2 px-4 rounded-md">
        Login
      </motion.button>
    </form>

    <p>Create a new account? <Link to={'/signup'} className=' text-blue-600'>Signup</Link></p>
   
   </main>
  );
};

export default Login;