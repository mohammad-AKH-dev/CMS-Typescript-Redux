import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App(): JSX.Element {
  const router = useRoutes(routes)

  return (
  <>
     <div className="flex h-[2000px]">
        <Sidebar  />
        <div className={`content w-full p-6 container `}>
          <Header />
          <div className="main-content">
            {
              router
            }
          </div>
        </div>
      </div>
  </>)
}

export default App;
