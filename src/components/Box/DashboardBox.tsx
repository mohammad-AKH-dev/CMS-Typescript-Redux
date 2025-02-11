import { useAppSelector } from "@/Redux/hooks"
import { RiMoreLine } from "react-icons/ri";


type DashboardBoxProps = {
    subtitle: string ,
    count : number | string, 
    Icon: React.ReactNode,
    children: React.ReactNode
}

function DashboardBox(props: DashboardBoxProps) {
    const {subtitle,count, Icon , children} = props
    const theme = useAppSelector(store => store.themes.default)

  return (
    <div style={{backgroundColor: theme === '#081028' ? '#0B1739' : theme}} 
    className={`Dashboard-box p-4  min-h-[100px]  rounded-lg border ${theme === '#687478' || theme === '#ff6666' ? '#99a7cc' : 'border-primary'}`}>
      <span className="Dashboard-box__subtitle text-subtitle flex items-center justify-between">
        <div className="gap-x-2 font-text flex items-center">
        {Icon}
        {subtitle}
        </div>
          <RiMoreLine className="cursor-pointer"/>
        </span>
        <div className="Dashboard-box__title flex items-center gap-x-3 mt-4">
            <h4 className="text-[24px] text-title">{count}</h4>
            {children}
        </div>
    </div>
  )
}

export default DashboardBox
