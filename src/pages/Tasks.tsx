import Header from "@/components/Header";
import MainSidebar from "@/components/MainSidebar";
import TaskRow from "@/components/TaskRow";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { addTask, fetchTasks } from "@/Redux/tasksSlice";
import { taskType } from "@/Redux/types/tasksSlice.type";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Tasks() {
  const [activeTodos, setActiveTodos] = useState<taskType[]>([]);
  const [progressTodos, setProgressTodos] = useState<taskType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<taskType[]>([]);
  const tasks = useAppSelector((store) => store.tasks.tasks);
  const isOpen = useAppSelector((store) => store.sidebar.isOpen);
  const dispatch = useAppDispatch();
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    document.title = "Tasks";
  }, [window.location.pathname]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  useEffect(() => {
    if (tasks.length) {
      setActiveTodos(
        [...tasks].filter((task) => {
          return task.status === "Active";
        })
      );
      setProgressTodos(
        [...tasks].filter((task) => {
          return task.status === "In Progress";
        })
      );
      setCompletedTodos(
        [...tasks].filter((task) => {
          return task.status === "Completed";
        })
      );
    }
  }, [tasks]);

  const addNewTodo = useCallback(() => {
    MySwal.fire({
      title: "ADD",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "cancel",
      confirmButtonText: "ADD",
      color: "#fff",
      background: "rgba(11,23,57,1)",
      html: `
        <div className="flex items-center justify-center gap-x-0">
        <label for="swal-input1">
          title:
          </label>
          <input id="swal-input1" class="swal2-input ml-2 text-[14px] bg-primary" placeholder="title">
        </div>

         <div className="flex items-center justify-center gap-x-0">
        <label for="swal-input2">
          description:
          </label>
          <input id="swal-input2" class="swal2-input ml-2 mr-[6rem] text-[14px] bg-primary" placeholder="description">
        </div>

        <div>
        <label class="-ml-5 pr-2">
          field:
          </label>
          <select id="swal-input3" class="bg-primary mt-2 border-white w-[200px] mr-4 h-[36px] text-[12px] p-2 text-title">
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
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
        return {
          id: crypto.randomUUID(),
          title: input1.value,
          description: input2.value,
          field: input3.value,
        };
      },
    }).then(async (result) => {
       if(result.isConfirmed && result.value.title.length && result.value.description.length) {
        await dispatch(addTask({
          ...result.value,
          status: 'Active'
         }))
         MySwal.fire({
          title: 'success',
          icon: 'success',
          text: 'You added new task successfully :)',
          background : 'rgba(11,23,57,1)',
          color: '#fff',
          confirmButtonText: 'ok'
         }).then(() => dispatch(fetchTasks()))
       }
    })
  }, [])

  const addProgressTodo = useCallback(() => {
    MySwal.fire({
      title: "ADD",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "cancel",
      confirmButtonText: "ADD",
      color: "#fff",
      background: "rgba(11,23,57,1)",
      html: `
        <div className="flex items-center justify-center gap-x-0">
        <label for="swal-input1">
          title:
          </label>
          <input id="swal-input1" class="swal2-input ml-2 text-[14px] bg-primary" placeholder="title">
        </div>

         <div className="flex items-center justify-center gap-x-0">
        <label for="swal-input2">
          description:
          </label>
          <input id="swal-input2" class="swal2-input ml-2 mr-[6rem] text-[14px] bg-primary" placeholder="description">
        </div>

        <div>
        <label class="-ml-5 pr-2">
          field:
          </label>
          <select id="swal-input3" class="bg-primary mt-2 border-white w-[200px] mr-4 h-[36px] text-[12px] p-2 text-title">
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
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
        return {
          id: crypto.randomUUID(),
          title: input1.value,
          description: input2.value,
          field: input3.value,
        };
      },
    }).then(async (result) => {
       if(result.isConfirmed && result.value.title.length && result.value.description.length) {
        await dispatch(addTask({
          ...result.value,
          status: 'In Progress'
         }))
         MySwal.fire({
          title: 'success',
          icon: 'success',
          text: 'You added new task successfully :)',
          background : 'rgba(11,23,57,1)',
          color: '#fff',
          confirmButtonText: 'ok'
         }).then(() => dispatch(fetchTasks()))
       }
    })
  }, []);

  const addCompletedTodo = useCallback(() => {
    MySwal.fire({
      title: "ADD",
      icon: "info",
      showCancelButton: true,
      cancelButtonText: "cancel",
      confirmButtonText: "ADD",
      color: "#fff",
      background: "rgba(11,23,57,1)",
      html: `
        <div className="flex items-center justify-center gap-x-0">
        <label for="swal-input1">
          title:
          </label>
          <input id="swal-input1" class="swal2-input ml-2 text-[14px] bg-primary" placeholder="title">
        </div>

         <div className="flex items-center justify-center gap-x-0">
        <label for="swal-input2">
          description:
          </label>
          <input id="swal-input2" class="swal2-input ml-2 mr-[6rem] text-[14px] bg-primary" placeholder="description">
        </div>

        <div>
        <label class="-ml-5 pr-2">
          field:
          </label>
          <select id="swal-input3" class="bg-primary mt-2 border-white w-[200px] mr-4 h-[36px] text-[12px] p-2 text-title">
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
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
        return {
          id: crypto.randomUUID(),
          title: input1.value,
          description: input2.value,
          field: input3.value,
        };
      },
    }).then(async (result) => {
       if(result.isConfirmed && result.value.title.length && result.value.description.length) {
        await dispatch(addTask({
          ...result.value,
          status: 'Completed'
         }))
         MySwal.fire({
          title: 'success',
          icon: 'success',
          text: 'You added new task successfully :)',
          color: '#fff',
          background : 'rgba(11,23,57,1)',
          confirmButtonText: 'ok'
         }).then(() => dispatch(fetchTasks()))
      }})
  }, []);

  return (
    <div className="flex ">
      <MainSidebar />
      <div
        className={`content w-full p-6 container sm:min-w-[350px] ${
          isOpen ? "max-w-[1200px]" : " max-w-[1350px]"
        }`}
      >
        <Header />
        <div className="main-content">
          <section className="tasks-section mt-16">
            <div className={`tasks-wrapper ${
              !isOpen ? 'grid gap-y-6 lg:gap-y-0  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 mr-4 md:mr-0 gap-y-6 lg:gap-y-0'
            }`}>
              <TaskRow
                title="To Do"
                count={activeTodos.length}
                handler={addNewTodo}
                tasks={activeTodos}
              />
              <TaskRow
                title="In progress"
                count={progressTodos.length}
                handler={addProgressTodo}
                tasks={progressTodos}
              />
              <TaskRow
                title="Completed"
                count={completedTodos.length}
                handler={addCompletedTodo}
                tasks={completedTodos}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
