import { useAppSelector } from "@/Redux/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivatePage({ children }: { children: React.ReactNode }) {
  const auth = useAppSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLogin) {
      navigate("/login");
    }
  });
  return <>{children}</>;
}

export default PrivatePage;
