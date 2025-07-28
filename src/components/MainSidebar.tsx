
import { BsArrows } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import SidebarLink from "./SidebarLink";
import { HiUsers } from "react-icons/hi2";
import { IoBag } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setIsOpen } from "@/Redux/sidebarSlice";
import { setInfos, setIsLogin } from "@/Redux/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)




function MainSidebar(): JSX.Element {
  const theme = useAppSelector((store) => store.themes.default);
  const isOpen = useAppSelector(store => store.sidebar.isOpen)
  const user = JSON.parse(localStorage.getItem('user')!)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  

  const logout = () => {
    dispatch(setIsLogin(false))
    dispatch(setInfos(null))
    localStorage.setItem('status','offline')
    localStorage.setItem('isLogin','false')
    localStorage.setItem('user',JSON.stringify(null))
    navigate('/login')
  }

  const handler = () => {
     MySwal.fire({
       title: 'Warning !',
       text: 'Are You Sure About Logout?',
       icon: 'warning',
       confirmButtonText: 'Yes',
       cancelButtonText: 'No',
       showCancelButton: true,
       background: 'rgba(11,23,57,1)',
       color: '#fff',
       iconColor: 'orange'
     }).then(result => {
      if(result.isConfirmed) {
        logout()
      }
     })
  }
  


  return (
    <>
      <div
        className={`side-bar sticky left-0 top-0 transition-all 
        ${isOpen ? "min-w-[250px]" : "min-w-[70px]"}
       h-svh p-6 shadow-sidebar `}
      >
        {/* sidebar logo */}
        <div className="side-bar__logo-wrapper flex items-center justify-between gap-x-8">
          <div className={`logo flex items-center justify-start ${!isOpen ? 'ml-[.5rem]' : 'ml-0'}`}>
            <svg
              className="cursor-pointer"
              onClick={() => dispatch(setIsOpen(true))}
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.55363 0.275879C9.09481 0.275879 8.72287 0.647826 8.72287 1.10665V8.99895H8.72283C3.90521 8.99895 -0.000244141 12.9044 -0.000244141 17.722C-0.000244141 22.5396 3.90521 26.4451 8.72283 26.4451H16.6151C17.074 26.4451 17.4459 26.0731 17.4459 25.6143V17.722H17.4459C22.2636 17.722 26.169 13.8166 26.169 8.99895C26.169 4.18133 22.2636 0.275879 17.4459 0.275879H9.55363ZM17.4459 17.722V9.82971C17.4459 9.37089 17.074 8.99895 16.6151 8.99895H8.72287V16.8913C8.72287 17.3501 9.09481 17.722 9.55363 17.722H17.4459Z"
                fill="#CB3CFF"
              />
              <path
                d="M9.46 0.275879C9.05288 0.275879 8.72284 0.605917 8.72284 1.01304L8.72284 8.99895H16.7088C17.1159 8.99895 17.4459 9.32899 17.4459 9.73611L17.4459 17.722C22.2635 17.722 26.169 13.8166 26.169 8.99895C26.169 4.18133 22.2635 0.275879 17.4459 0.275879H9.46Z"
                fill="#00C2FF"
              />
            </svg>
            <h3
              className={`logo-title transition-all text-title font-title  pl-2 ${
                isOpen ? "w-fit" : "text-[0px]"
              }`}
            >
              Dashdark X
            </h3>
          </div>
          <div
            className={`open-close__sidebar-btn  transition-all ${
              isOpen ? "w-[16px]" : "text-[0px]"
            }`}
          >
            <BsArrows
              className="text-icon cursor-pointer"
              onClick={() => dispatch(setIsOpen(false))}
            />
          </div>
        </div>
        {/* search bar */}
        <div
          style={{ backgroundColor: theme }}
          className={`search-bar__wrapper ${
            isOpen ? "block" : "hidden"
          } mt-8 border ${
            theme === "#ff6666"
              ? "border-rose-100"
              : "border-default focus-within:border-primary "
          }  
            ${
              theme === "#687478" &&
              "border-[#99a7cc] focus-within:border-cyan-300"
            } px-4 py-3  rounded-md flex items-center justify-center gap-x-2`}
        >
          <CiSearch className="text-icon cursor-pointer" />
          <input
            type="text"
            className="w-[90%] bg-inherit text-title text-[12px] border-none outline-none"
            placeholder="Search bar..."
          />
        </div>
        {/* links */}
        <ul 
        className={`sidebar-links__list mt-8
        ${!isOpen ? 'relative gap-y-[3.8rem] left-2 top-4' : 'static gap-y-8'} flex flex-col text-[0px]`}>
          <SidebarLink isOpen={isOpen} title="Dashboard" href="/">
            <IoMdHome className="text-[20px]" />
          </SidebarLink>
          <SidebarLink isOpen={isOpen} title="Users" href="/users">
            <HiUsers className="text-[20px]" />
          </SidebarLink>
          <SidebarLink isOpen={isOpen} title="Products" href="/products">
            <IoBag className="text-[20px]" />
          </SidebarLink>
          <SidebarLink isOpen={isOpen} title="Messages" href="/messages">
            <AiFillMessage className="text-[20px]" />
          </SidebarLink>
          <SidebarLink isOpen={isOpen} title="Tasks" href="/tasks">
            <FaTasks className="text-[20px]" />
          </SidebarLink>
            <div className="flex items-center gap-x-1">
            <IoMdSettings className="text-[20px] text-icon cursor-pointer" />
              <span className={`block ${isOpen ? 'text-[14px]' : 'text-[0px]'} text-icon`}>Settings</span>
            </div>
        </ul>

        {/* admin profile */}
        <div className="admin-profile flex items-center justify-between mt-24 ">
          <div className="profile__content flex items-center gap-x-2">
            <img src="/images/profiles/admin-profile.png" alt="admin" 
            className={`${!isOpen ? 'absolute bottom-4' : 'static'}`} />
            <div
              className={`profile-title__wrapper ${
                isOpen ? "text-[12px]" : "text-[0px]"
              }`}
            >
              <h4 className="profile-title font-title text-title">
                {user?.name}
              </h4>
              <p className="profile-position text-icon">{user?.position}</p>
            </div>
          </div>
          <div className="dropdown-wrapper">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`${isOpen ? "block" : "hidden"}`}
              >
                <IoIosArrowForward className="text-icon cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-input text-title border-none">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Team
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Subscription
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={handler}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSidebar;
