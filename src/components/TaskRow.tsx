import { FiMoreVertical } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import TaskBox from "./Box/TaskBox";
import { useAppSelector } from "@/Redux/hooks";
import { taskType } from "@/Redux/types/tasksSlice.type";

type taskRowPropsType = {
  title: string;
  count: number;
  tasks: taskType[]
  handler: () => void;
};

function TaskRow(props: taskRowPropsType) {
  const theme = useAppSelector(store => store.themes.default)
  const { title, count, handler , tasks} = props;
  return (
    <div className="task-row">
      <div className="task-row__header flex items-center justify-between">
        <div className="task-header__title flex items-center gap-x-2">
          <span className="text-icon">{title}</span>
          <span
            className="task-header__count block text-title py-[.2rem] px-[.6rem] rounded-md bg-[rgba(113,116,197,.2)]
            border border-[rgba(87,93,255,.5)]"
          >
            {count}
          </span>
        </div>
        <FiMoreVertical className="text-title cursor-pointer" />
      </div>
      <div
        className={`add-tast__box cursor-pointer flex items-center justify-center 
      p-4 border 
      ${theme === '#ff666' && 'bg-[#3614e2c9] border-white'}
      ${theme === '#687478' && 'bg-[#574c559c] border-white'} 
      ${theme === '#081028' && 'bg-box  border-primary'}
      ${theme === '#00264c' && 'bg-primary border-primary'}
      mt-4 rounded-lg `}
        onClick={handler}
      >
        <FaPlus className="text-[20px] text-icon" />
      </div>
      <div className="tasks flex flex-col gap-y-6">
        {
          tasks.map(task => (
            <TaskBox key={task.id} {...task}/>
          ))
        }
      </div>
    </div>
  );
}

export default TaskRow;
