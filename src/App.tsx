import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { ToastContainer } from 'react-toastify';



function App(): JSX.Element {
  const router = useRoutes(routes)  

  return (
  <>
    {
      router
    }
   <ToastContainer />
  </>)
}

export default App;
