import React from "react";
import { useState } from "react";
import Card from "./UI/Card";
export default function Form({ data, setData, updateTask }) {
  let inputWidth = 400;
  let btnWidth = 400;

  const [taskState, setTaskState] = useState("");
  const [taskStart, setTaskStart] = useState("");
  const [taskEnd, setTaskEnd] = useState("");

  const handleTaskStatementChange = (e) => {
    setTaskState(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setTaskStart(e.target.value);
  };
  const handleEndTimeChange = (e) => {
    setTaskEnd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      id: Math.random(),
      task: taskState,
      startTime: taskStart,
      endTime: taskEnd,
    };

    setData(task);

    setTaskState("");
    setTaskStart("");
    setTaskEnd("");
  };
  return (
    <Card>
      <h1
        className="text-center text-light"
        style={{ fontSize: 50, fontWeight: 700 }}
      >
        {"Todo App "}
      </h1>
      <div className="">
        <form
          className="d-flex justify-content-center flex-column"
          onSubmit={handleSubmit}
        >
          <input
            required
            className=" mx-auto  my-1 rounded border-0 px-3 py-2"
            id="Tasks"
            placeholder="Task"
            style={{ width: inputWidth }}
            value={taskState}
            onChange={handleTaskStatementChange}
          />

          <input
            required
            className="mx-auto my-1 rounded border-0 px-3  py-2"
            placeholder="Start Time"
            style={{ width: inputWidth }}
            value={taskStart}
            onChange={handleStartTimeChange}
          />
          <input
            required
            className="mx-auto my-1 rounded border-0 px-3  py-2"
            placeholder="End Time"
            style={{ width: inputWidth }}
            value={taskEnd}
            onChange={handleEndTimeChange}
          />
          <button
            className=" btn btn-success text-center mx-auto my-1 px-5"
            style={{ width: btnWidth }}
            type="submit"
          >
            Submitt
          </button>
        </form>
      </div>
    </Card>
  );
}
