import UsersBox from "@/components/Box/UsersBox"
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { useAppSelector } from "@/Redux/hooks";
import UsersTable from "@/components/Tables/userstable/usersTable";



function Users() {

  const theme = useAppSelector(store => store.themes.default)

  return (
    <section className="users-section mt-12">
      {/* users box section */}
      <div className="users-box grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 users-boxes__wrapper gap-x-8">
          <UsersBox icon=<FaUserGroup className="text-[#CB3CFF]"/>
           title="Total Users" subtitle={250} background="rgba(203,60,255,0.2)"/>
          <UsersBox icon=<FaUser className="text-[#FDB52A]"/> 
          title="New Users" subtitle={15} background="rgba(227,176,77,0.2)"/> 
          <UsersBox icon=<FaHeart className="text-[#05C168]"/>
          title="Top Users" subtitle={200} background="rgba(5,193,104,0.2)"/>
          <UsersBox icon=<CgMoreO className="text-[#086CD9]"/> 
          title="Other Users" subtitle={35} background="rgba(8,108,217,0.2)"/>
      </div>
      {/* users table */}
      <section style={{backgroundColor: `${theme === '#081028' ? '#0b1739' : theme}`}} 
        className=
        {`users-section mt-8 border rounded-lg ${
          theme === "#ff6666" || theme === "#687478"
            ? "border-[#99a7cc]"
            : "border-primary"
        }`}>
        <div
        className={`users__header flex-wrap gap-y-6 p-4 
        flex items-center justify-between`}>
          <h4 className="orders-status__title text-title font-title text-[20px]">All Users</h4>
          
        </div>
        {/* users table */}
        <UsersTable/>
      </section>
    </section>
  )
}

export default Users
