import { FaGoogle } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/Redux/hooks";
import { setInfos, setIsLogin } from "@/Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

type inputs = {
  username: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<inputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const successToast = () =>
    toast.success("You Logged In Successfully :)", {
      position: "top-left",
      onClose: () => navigate("/"),
      autoClose: 3000,
    });

  const errorToast = () =>
    toast.error("invalid username or password", {
      position: "top-left",
      onClose: () => setIsDisable(false),
      autoClose: 3000,
    });


  const submitHandler = (data: inputs) => {
    if (
      data.username.toLocaleLowerCase().trim() === "mohammad akh" &&
      data.password.toLocaleLowerCase().trim() === "admin1234"
    ) {
      dispatch(setIsLogin(true));
      dispatch(
        setInfos({
          id: "1",
          name: "Mohammad Akhlaghi",
          position: "Frontend Developer",
          password: "admin1234",
          token: "login",
          email: "mohammadakhlaghi332@gmail.com",
          role: "admin",
        })
      );
      localStorage.setItem("status", "online");
      localStorage.setItem("isLogin", "true");
      successToast();
    } else {
      setIsDisable(true);
      errorToast();
    }
  };

  return (
    <>
      <div className="login-form__wrapper w-full h-full flex items-center justify-center bg-primary">
        <form
          className="login-form rounded-lg bg-box text-subtitle p-6 shadow-form w-[75%] sm:w-[50%] md:w-[45%] lg:w-[30%]"
          onSubmit={handleSubmit(submitHandler)}
        >
          <legend className="text-[24px] font-title text-title text-center mb-8">
            Login
          </legend>
          <div className="inputs-wrapper flex flex-col gap-y-8">
            <input
              type="text"
              placeholder="username"
              className="outline-none border-none p-3 bg-inherit 
             shadow-Input w-full bg-primary rounded-full"
              {...register("username")}
            />
            <input
              type="password"
              placeholder="password"
              className="outline-none border-none p-3 bg-inherit 
             shadow-Input w-full bg-primary rounded-full"
              {...register("password")}
            />
            <span className="block cursor-pointer">Forgot Password ?</span>
            <button
              type="submit"
              disabled={isDisable}
              className={`w-full rounded-full 
              ${
                isDisable ? "bg-[#8e649d]" : "bg-selected"
              } transition-all text-[18px] p-2 `}
            >
              Login
            </button>
          </div>
          <span className="block mt-8 text-center text-[12px] text-icon">
            Or Sign in with
          </span>
          <div className="companies-inputs__wrapper flex items-center justify-center mt-6 gap-x-6 flex-wrap sm:flex-nowrap">
            <div className="icon-wrapper p-3 rounded-full bg-primary cursor-pointer">
              <FaGoogle className="text-[20px]" />
            </div>
            <div className="icon-wrapper p-3 rounded-full bg-primary cursor-pointer">
              <BsApple className="text-[20px]" />
            </div>
            <div className="icon-wrapper p-3 rounded-full bg-primary cursor-pointer">
              <BsTwitterX className="text-[20px]" />
            </div>
          </div>
          <p className="text-[12px] text-center mt-5">
            Learn user licence agreement
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
