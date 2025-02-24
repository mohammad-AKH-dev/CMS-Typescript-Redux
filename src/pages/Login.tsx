import { FaGoogle } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form"

type inputs = {
  username: string 
  password: string
}


function Login() {
  const {
    register,
    handleSubmit,
  } = useForm<inputs>({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const submitHandler = (data: inputs) => {
    console.log(data)
  }

  return (
    <div className="login-form__wrapper w-full h-full flex items-center justify-center bg-primary">
       <form className="login-form rounded-lg bg-box p-6 shadow-form w-[60%] sm:w-[50%] md:w-[45%] lg:w-[30%]" onSubmit={handleSubmit(submitHandler)}>
         <legend className="text-[24px] font-title text-title text-center mb-8">Login</legend>
         <div className="inputs-wrapper flex flex-col gap-y-8">
             <input type="text" placeholder="username" className="outline-none border-none p-3 bg-inherit 
             shadow-Input w-full bg-primary rounded-full" {...register('username')}/>
             <input type="password" placeholder="password" className="outline-none border-none p-3 bg-inherit 
             shadow-Input w-full bg-primary rounded-full" {...register('password')}/>
             <span className="block cursor-pointer">Forgot Password ?</span>
             <button type="submit" className="w-full rounded-full text-[18px] p-2 bg-selected">Login</button>
         </div>
         <span className="block mt-8 text-center text-[12px] text-icon">Or Sign in with</span>
         <div className="companies-inputs__wrapper flex items-center justify-center mt-6 gap-x-6 flex-wrap sm:flex-nowrap">
            <div className="icon-wrapper p-3 rounded-full bg-primary cursor-pointer">
               <FaGoogle className="text-[20px]"/>
            </div>
            <div className="icon-wrapper p-3 rounded-full bg-primary cursor-pointer">
               <BsApple className="text-[20px]"/>
            </div>
            <div className="icon-wrapper p-3 rounded-full bg-primary cursor-pointer">
               <BsTwitterX className="text-[20px]"/>
            </div>
         </div>
         <p className="text-[12px] text-center mt-5">Learn user licence agreement</p>
       </form>
    </div>
  )
}

export default Login
