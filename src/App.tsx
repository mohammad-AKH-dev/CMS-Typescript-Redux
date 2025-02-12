import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

function App(): JSX.Element {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const router = useRoutes(routes)

  return (
  <>
     <div className="flex h-[2000px]">
        <Sidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
        <div className={`content w-full p-6 container ${isOpenSidebar ? 'min-w-[1080px]' : 'min-w-[1210px]'}`}>
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
