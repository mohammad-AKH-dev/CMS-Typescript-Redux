import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useAppSelector } from "./Redux/hooks";

function App(): JSX.Element {
  const router = useRoutes(routes)
  const isOpen = useAppSelector(state => state.sidebar.isOpen)

  return (
  <>
     <div className="flex ">
        <Sidebar  />
        <div className={`content w-full p-6 container sm:min-w-[350px] ${isOpen ? 'max-w-[1200px]' : ' max-w-[1350px]'}`}>
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
