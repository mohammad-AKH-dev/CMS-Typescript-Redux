import { FaGoogle } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { fetchAdmin, setIsLogin } from "@/Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

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
  const auth = useAppSelector((store) => store.auth);
  const [hasNetWork, setHasNetWork] = useState(navigator.onLine);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  useEffect(() => {
    const isOnlineHandler = () => {
      setHasNetWork(true);
      toast.success("Your connection is back.", {
        autoClose: 3000,
        position: "top-left",
      });
      dispatch(fetchAdmin())
    };
    window.addEventListener("online", isOnlineHandler);

    return () => window.removeEventListener("online", isOnlineHandler);
  }, []);

  useEffect(() => {
    const isOfflineHandler = () => {
      setHasNetWork(false);
      toast.error("You are offline. Please check your connection.", {
        autoClose: 3000,
        position: "top-left",
      });
    };
    window.addEventListener("offline", isOfflineHandler);

    return () => window.removeEventListener("offline", isOfflineHandler);
  }, []);

  useEffect(() => {
    dispatch(fetchAdmin());
  }, []);

  const successToast = () =>
    toast.success("You Logged In Successfully :)", {
      position: "top-left",
      onClose: () => navigate("/"),
      autoClose: 3000,
    });

  const errorToast = () =>
    toast.error("invalid username or password", {
      position: "top-left",
      autoClose: 3000,
    });

  const submitHandler = (data: inputs) => {
    setIsDisable(true);
    if (hasNetWork) {
      try {
        if (auth.infos) {
          if (
            data.username.toLocaleLowerCase().trim() === "admin" &&
            data.password.toLocaleLowerCase().trim() === "admin"
          ) {
            dispatch(setIsLogin(true));
            localStorage.setItem("status", "online");
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("user", JSON.stringify(auth.infos));
            successToast();
          } else {
            errorToast();
          }
        } else {
          toast.error("something went wrong. please try again.", {
            position: "top-left",
            autoClose: 3000,
          });
        }
      } catch (err: unknown) {
        toast.error("something went wrong. please try again.", {
          position: "top-left",
          autoClose: 3000,
        });
      } finally {
        setTimeout(() => {
          setIsDisable(false);
        }, 3000);
      }
    } else {
      toast.error("You are offline. Please check your connection.", {
        onClose: () => setIsDisable(false),
        position: 'top-left',
        autoClose: 3000,
      });
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
