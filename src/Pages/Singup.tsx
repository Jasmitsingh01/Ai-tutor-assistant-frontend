import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"] // path of the error
});


interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}


const Signup= () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({
      resolver: zodResolver(signupSchema),
    });
  
    const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
      console.log(data); // Handle signup submission here (e.g., API call)
    };
  
    return (
     <main className=' bg-background fixed min-h-screen w-full flex flex-col justify-center items-center  '>

<form onSubmit={handleSubmit(onSubmit)} className="max-w-md  w-full mx-auto my-10 p-6 text-[#072448]   ">
        <h2 className="text-2xl text-center font-bold mb-4">Sign Up Form</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block  font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full px-3 py-2 border outline-none  rounded-md ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="email" className="block  font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full px-3 py-2 border outline-none  rounded-md ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
  
        <div className="mb-4">
          <label htmlFor="password" className="block  font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`w-full px-3 py-2 border outline-none rounded-md ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block  font-bold mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className={`w-full px-3 py-2 border outline-none  rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>
  
        <button type="submit" className="w-full bg-transparent border-2 hover:bg-[#072448] hover:text-white hover:border-0 font-bold py-2 px-4 rounded-md">
          Sign Up
        </button>
      </form>

      <p>
        Already, have account ? <Link to={'/login'} className=' text-blue-600'>login</Link>
      </p>
     </main>
    );
  };
  
  export default Signup;