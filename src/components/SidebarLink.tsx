import React from "react"
import { NavLink } from "react-router-dom"

type SidebarLinkProps = {
   title: string,
   href: string,
   children: React.ReactNode,
   isOpen: boolean
}

function SidebarLink(props: SidebarLinkProps) {
   const {title,href,children,isOpen} = props
  return (
    <NavLink to={href} className="sidebar-link flex gap-x-1 text-icon">
       {children}
       <h4 className={`sidebar-link__title ${isOpen ? 'text-[14px]' : 'text-[0px]'}`}>{title}</h4>
    </NavLink>
  )
}

export default SidebarLink
