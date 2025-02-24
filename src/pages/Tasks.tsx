import Header from "@/components/Header";
import MainSidebar from "@/components/MainSidebar";
import TaskRow from "@/components/TaskRow";
import { useAppSelector } from "@/Redux/hooks";
import { useCallback, useEffect, useState } from "react";

type TodoType = {
  id: number | string;
  title: string;
  status: "Active" | "In Progress" | "completed";
  category: "development" | "design" | "marketing";
};

function Tasks() {
  const [activeTodos, setActiveTodos] = useState<TodoType[]>([]);
  const [progressTodos, setProgressTodos] = useState<TodoType[]>([]);
  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);
  const isOpen = useAppSelector(store => store.sidebar.isOpen)

  useEffect(() => {
    document.title = "Tasks";
  }, [window.location.pathname]);

  const addNewTodo = useCallback(() => {
    console.log("added");
  }, []);

  const addProgressTodo = useCallback(() => {
    console.log("progress");
  }, []);

  const addCompletedTodo = useCallback(() => {
    console.log("completed");
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
            <div className="tasks-wrapper grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
              <TaskRow title="To Do" count={2} handler={addNewTodo} />
              <TaskRow
                title="In progress"
                count={3}
                handler={addProgressTodo}
              />
              <TaskRow title="Completed" count={4} handler={addCompletedTodo} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
