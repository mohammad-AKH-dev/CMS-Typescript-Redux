import { useAppSelector } from "@/Redux/hooks"
import React from "react";
import { MdMoreVert } from "react-icons/md";

type UsersBoxPropsType = {
  icon : React.ReactNode,
  title: string ,
  subtitle : number,
  background: string
}

function UsersBox(props: UsersBoxPropsType) {
  const {icon,title,subtitle,background} = props
  const theme = useAppSelector(store => store.themes.default)

  return (
    <div className={`users-box ${theme === '#081028' ? 'bg-box' : theme} border
    ${theme === '#ff6666' || theme === '#687478' ? 'border-[#99a7cc]' : 'border-primary'} p-6 flex items-center rounded-lg justify-between`}>
      <div className="users-box__title-wrapper flex gap-x-4">
        <div style={{backgroundColor: background}} className={`icon-wrapper flex w-[40px] h-[40px] rounded-full items-center justify-center`}>
           {icon}
        </div>
        <div className="users-box__title flex items-cetner flex-col">
          <span className="font-title text-title text-[16px] block">{title}</span>
          <span className="users-count font-text text-subtitle text-[12px] block">{subtitle}</span>
        </div>
      </div>
       <MdMoreVert className="text-[18px] text-icon cursor-pointer"/>
    </div>
  )
}

export default UsersBox
