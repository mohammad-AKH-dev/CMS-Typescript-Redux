import DashboardBox from "@/components/Box/DashboardBox"
import { IoEyeSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge"
import { RxArrowTopRight } from "react-icons/rx";
import { RxArrowBottomRight } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";




function Dashboard() {
  return (
    <div className="Dashboard">
        <div className="Dashboard-boxes grid grid-cols-4 gap-x-4 mt-8">
       <DashboardBox count={`${50.8}K`} subtitle="Pageviews" Icon=<IoEyeSharp/> >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            28.4% 
            <RxArrowTopRight className="ml-1"/></Badge>
       </DashboardBox>
       <DashboardBox count={`${23.6}K`} subtitle="Monthly users" Icon=<FaUser/> >
          <Badge className="bg-error flex items-center justify-center text-textError p-[.2rem] rounded-sm text-[11px]">
            12.6% 
            <RxArrowBottomRight className="ml-1"/></Badge>
       </DashboardBox>
       <DashboardBox count={756} subtitle="New sign ups" Icon=<IoMdAddCircle/> >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            3.1% 
            <RxArrowTopRight className="ml-1"/></Badge>
       </DashboardBox>
       <DashboardBox count={`${2.3}k`} subtitle="Subscriptions" Icon=<FaStar/> >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            11.3% 
            <RxArrowTopRight className="ml-1"/></Badge>
       </DashboardBox>
        </div>
    </div>
  )
}

export default Dashboard
