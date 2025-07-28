import { useAppSelector } from "@/Redux/hooks";
import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

function PrivatePage({ children }: { children: React.ReactNode }) {
  const auth = useAppSelector((store) => store.auth);
  const status = localStorage.getItem("status")
  const pathName = useLocation().pathname
  const localStorageLogin = localStorage.getItem('isLogin')
  const user = JSON.parse(localStorage.getItem('user')!)
  const navigate = useNavigate()
   
  useEffect(() => {
    if(auth.isLogin === 'false' || status === 'offline' ||  !user) {
      navigate('/login', {replace: true})
    }
  },[pathName,localStorageLogin,status,user])


  return <>
   {children}
  </>
}

export default PrivatePage;
