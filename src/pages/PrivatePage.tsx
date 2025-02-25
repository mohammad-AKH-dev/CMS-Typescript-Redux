import { useAppSelector } from "@/Redux/hooks";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function PrivatePage({ children }: { children: React.ReactNode }) {
  const auth = useAppSelector((store) => store.auth);
  const status = localStorage.getItem("status")
  const localStorageLogin = localStorage.getItem('isLogin')
  const navigate = useNavigate()
   
  useEffect(() => {
    if(auth.isLogin === 'false' && status === 'offline') {
      navigate('/login')
    }else if (!localStorageLogin || !status) {
      navigate('/login')
    }
  },[window.location.pathname,localStorageLogin,status])


  return <>
   {children}
  </>
}

export default PrivatePage;
