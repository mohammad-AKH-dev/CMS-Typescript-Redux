import { Badge } from "@/components/ui/badge";
import { IoIosMore } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";
import { useAppSelector } from "@/Redux/hooks";
import { taskType } from "@/Redux/types/tasksSlice.type";

type TaskBoxPropsType = taskType;

function TaskBox(props: TaskBoxPropsType) {
  const theme = useAppSelector((store) => store.themes.default);
  return (
    <div
      className={`task-wrapper mt-4 p-4 
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
        <h3 className="task-title text-title font-title mt-4">{props.title}</h3>
        <p className="task-description text-subtitle font-text mt-2">
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
          <IoIosMore className="text-icon text-[20px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default TaskBox;
