import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { useState, useCallback } from "react";
import Card from "./components/UI/Card";
import EmptyList from "./components/EmptyList";

function App() {
  const [taskList, setFormValue] = useState([]);
  const setTasks = (task) => {
    setFormValue((prev) => [...prev, task]);
  };

  const removeTasks = (index) => {
    const newArray = taskList.filter((item) => item.id !== index);
    setFormValue(newArray);
  };

  const updateTask = useCallback(
    (updatedTask) => {
      setFormValue((prev) =>
        prev.map((item) =>
          item.id === updatedTask.id
            ? {
                ...item,
                ...updatedTask,
              }
            : item
        )
      );
    },
    [taskList]
  );
  console.log(taskList);

  return (
    <main>
      <Card className="bg-aqua text-dark">
        <Form data={taskList} setData={setTasks} updateTask={updateTask} />

        {taskList.length ? (
          <TaskList
            data={taskList}
            setData={removeTasks}
            updateData={updateTask}
          />
        ) : (
          <EmptyList />
        )}
      </Card>
    </main>
  );
}

export default App;
