import { Badge } from "@/components/ui/badge";
import { IoIosMore } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { taskType } from "@/Redux/types/tasksSlice.type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { editTask, fetchTasks, removeTask } from "@/Redux/tasksSlice";
import { useState } from "react";


type TaskBoxPropsType = taskType;

function TaskBox(props: TaskBoxPropsType) {
  const theme = useAppSelector((store) => store.themes.default);
  const isOpen = useAppSelector(store => store.sidebar.isOpen)
  const dispatch = useAppDispatch()
  const MySwal = withReactContent(Swal)

  const [options,setOptions] = useState<string[]>(["Development","Marketing","Design"])
  const [allStatus,setAllStatus] = useState<string[]>(["Active","In Progress","Completed"])

   const removeHandler = (id: string) => {
    MySwal.fire({
      title: 'Warning !',
      text: 'Are you sure you want to remove this task?',
      icon: 'warning',
      color: '#fff',
      background: "rgba(11,23,57,1)",
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes'
    }).then(result => {
      if(result.isConfirmed) {
         dispatch(removeTask(id))
         MySwal.fire({
          title: 'success',
          text: 'Task removed successfully',
          icon: 'success',
          color: '#fff',
          background: "rgba(11,23,57,1)",
          confirmButtonText: 'ok'
         }).then(() => dispatch(fetchTasks()))
      }
    })
   }

   const editHandler = (data :taskType) => {
      MySwal.fire({
           title: "Edit",
           icon: "info",
           showCancelButton: true,
           cancelButtonText: "cancel",
           confirmButtonText: "Edit",
           color: "#fff",
           background: "rgba(11,23,57,1)",
           html: `
             <div className="flex items-center justify-center gap-x-0">
             <label for="swal-input1">
               title:
               </label>
               <input value='${data.title}' id="swal-input1" class="swal2-input ml-2 text-[14px] bg-primary" placeholder="title">
             </div>
     
              <div className="flex items-center justify-center gap-x-0">
             <label for="swal-input2">
               description:
               </label>
               <input value='${data.description}' id="swal-input2" class="swal2-input ml-2 mr-[6rem] text-[14px] bg-primary" placeholder="description">
             </div>
     
             <div>
             <label class="-ml-5 pr-2">
               field:
               </label>
               <select id="swal-input3" class="bg-primary mt-3 border-white w-[200px] mr-4 h-[36px] text-[12px] p-2 text-title">
                  ${
                    options.map(option => (
                       option === data.field &&

                       `<option value='${option}' selected>${data.field}</option>`
                    ))
                  }
                  ${
                    options.map(option => (
                       option !== data.field &&
                       `<option value='${option}' >${option}</option>`
                    ))
                  }
               </select>      
             </div>
             <div>
             <label class="-ml-5 pr-2">
               status:
               </label>
               <select id="swal-input4" class="bg-primary mt-3 border-white w-[200px] mr-[2.1rem] h-[36px] text-[12px] p-2 text-title">
                  ${
                    allStatus.map(status => (
                       status === data.status &&

                       `<option value='${status}' selected>${data.status}</option>`
                    ))
                  }
                  ${
                    allStatus.map(status => (
                       status !== data.status &&
                       `<option value='${status}' >${status}</option>`
                    ))
                  }
               </select>      
             </div>
             `,
           preConfirm: () => {
             const input1 = document.getElementById(
               "swal-input1"
             ) as HTMLInputElement;
             const input2 = document.getElementById(
               "swal-input2"
             ) as HTMLInputElement;
             const input3 = document.getElementById(
               "swal-input3"
             ) as HTMLSelectElement;
             const input4 = document.getElementById("swal-input4") as HTMLSelectElement
             return {
               id: data.id,
               title: input1.value,
               description: input2.value,
               field: input3.value,
               status: input4.value
             };
           },
         }).then(async (result) => {
            if(result.isConfirmed && result.value.title.length && result.value.description.length) {
             await dispatch(editTask({
               ...result.value
              }))
              MySwal.fire({
               title: 'success',
               icon: 'success',
               text: 'You edited new task successfully :)',
               background : 'rgba(11,23,57,1)',
               color: '#fff',
               confirmButtonText: 'ok'
              }).then(() => dispatch(fetchTasks()))
            }
         })
   }

  return (
    <div
      className={`task-wrapper mt-4 p-4 max-h-[250px]
      ${theme === "#ff666" && "bg-[#3614e2c9] border-white"}
         ${theme === "#687478" && "bg-[#574c559c] border-white"} 
         ${theme === "#081028" && "bg-box  border-primary"}
         ${theme === "#00264c" && "bg-primary border-primary"}
          border rounded-lg`}
    >
      <div className="task">
        {/* task header */}
        <div className="user-task-profile flex items-center justify-between">
          <img src="/images/profiles/man.png" />
          <div className="task-infos text-icon flex items-center gap-x-2">
            <div className="task-comments flex items-center gap-x-1">
              <FaComment />
              <span>2</span>
            </div>
            <div className="task-pins flex items-center gap-x-1">
              <FaPaperclip />
              <span>4</span>
            </div>
          </div>
        </div>
        {/* task description */}
        <h3 className={`task-title text-title font-title
           ${isOpen && 'md:whitespace-nowrap'}
          mt-4 whitespace-nowrap overflow-hidden text-ellipsis md:whitespace-normal`}>{props.title}</h3>
        <p className="task-description text-subtitle font-text mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {props.description}
        </p>
        {/* task status */}
        <div className="task-status mt-12 flex items-center justify-between">
          {props.field === "Development" && (
            <Badge className="flex items-center gap-x-1 bg-[rgba(87,195,255,.2)] p-1 px-2">
              <img src="/images/icons/Development Icon.svg" alt="svg" />
              <span>{props.field}</span>
            </Badge>
          )}

          {props.field === "Design" && (
            <Badge className="flex items-center gap-x-1 bg-[rgba(87,93,255,.2)] p-1 px-2">
              <img src="/images/icons/Pencil Icon.png" alt="png" />
              <span>{props.field}</span>
            </Badge>
          )}

          {props.field === "Marketing" && (
            <Badge className="flex items-center gap-x-1 bg-[rgba(29,136,254,.2)] p-1 px-2">
              <img src="/images/icons/Marketing Icon.png" alt="png" />
              <span>{props.field}</span>
            </Badge>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoIosMore className="text-icon text-[20px] cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary text-icon">
              <DropdownMenuItem className="flex items-center justify-between cursor-pointer" onClick={() => editHandler(props)}>Edit <MdEdit/> </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center justify-between cursor-pointer" onClick={() => removeHandler(props.id)}>Delete <FaTrash/></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default TaskBox;
