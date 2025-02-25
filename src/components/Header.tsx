import { FaArrowDown } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { changeTheme } from "@/Redux/themeSlice";
import { useEffect } from "react";

function Header() {

    const themes = useAppSelector(store => store.themes)
    const isOpen = useAppSelector(store => store.sidebar.isOpen)
    const dispatch = useAppDispatch()
  
    const changeThemeHandler = (newTheme: string) => {
  
       dispatch(changeTheme(newTheme))
    }
  
    useEffect(() => {
  
      document.body.style.backgroundColor = themes.default
      document.body.className = `bg-[${themes.default}] w-full font-text text-[14px] overflow-x-hidden text-subtitle'`
   
    },[themes])

  return (
    <header className="flex header justify-between  items-center flex-wrap gap-y-4 lg:gap-y-0">
        <div className="header-title__wrapper">
          <h2 className="header-title text-[24px] text-title pr-8 sm:pr-0">
            Welcome back, John
          </h2>
          <p className={`header-subtitle text-subtitle text-[14px] ${!isOpen ? 'pr-8 sm:pr-0' : 'max-w-[280px] lg:max-w-full'}`}>
            Measure your advertising ROI and report website traffic.
          </p>
        </div>
        <div className="header-buttons__wrapper pr-12 sm:pr-0 flex-wrapo gap-y-4 md:gap-y-0  flex items-center gap-x-3">
          <button
            type="button"
            className="flex justify-center items-center gap-x-2 text-subtitle"
          >
            Export Data
            <FaArrowDown />
          </button>
          <button
            type="button"
            className="flex justify-center items-center gap-x-2 bg-selected p-2 rounded-sm"
          >
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="flex items-center gap-x-2 text-subtitle">
                  Change Theme
                  <FaPaintBrush />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-input text-title border-none">
                {
                  themes?.themes.map((theme: string, index: number) => (
                <DropdownMenuItem className="cursor-pointer flex items-center justify-between" key={index} onClick={() => changeThemeHandler(theme)}>
                  <span>{theme}</span> 
                  <div className={`p-4 rounded-full`} style={{backgroundColor: theme}}></div>
                </DropdownMenuItem>
                  ))
                }
                
              </DropdownMenuContent>
            </DropdownMenu>
          </button>
        </div>
      </header>
  )
}

export default Header
