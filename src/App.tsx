import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { useAppSelector } from "./Redux/hooks";

function App(): JSX.Element {
  const router = useRoutes(routes)

  const isLogin = useAppSelector(store => store.auth)

  return (
  <>
    {
      router
    }
  </>)
}

export default App;
