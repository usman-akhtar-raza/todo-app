import React from "react";
import { useState } from "react";
export default function ItemInputField({
  item,
  delHandler,
  editHandler,
  updateData,
}) {
  let [task, setTask] = useState(item?.task);
  let [start, setStart] = useState(item?.startTime);
  let [end, setEnd] = useState(item?.endTime);
  const submitHandler = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: item?.id,
      task: task,
      startTime: start,
      endTime: end,
    };
    updateData(updatedTask);
  };
  return (
    <>
      <form onSubmit={submitHandler} style={{ width: 400 }}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <strong>Task:</strong>
            <input
              className="my-1 rounded border-0 px-2 shadow-sm"
              type="text"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
                console.log(task);
              }}
            />
            <strong>Start Time:</strong>
            <input
              type="text"
              className="my-1 rounded border-0 px-2 shadow-sm"
              value={start}
              onChange={(e) => {
                setStart(e.target.value);
              }}
            />
            <strong>End Time:</strong>
            <input
              type="text"
              className="my-1 rounded border-0 px-2 shadow-sm"
              value={end}
              onChange={(e) => {
                setEnd(e.target.value);
              }}
            />
          </div>
          <div className="d-flex flex-column justify-content-between border">
            <button
              className="btn btn-danger "
              onClick={() => {
                delHandler(item?.id);
              }}
            >
              <i className="fa-solid fa-x "></i>
            </button>
            <button
              onClick={() => {
                editHandler(item?.id);
              }}
              className="btn btn-success"
              type="submit"
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

// import React from "react";
// import { useState } from "react";
// export default function ItemInputField({ item, delHandler, editHandler }) {
//   let [task, setTask] = useState(item?.task);
//   let [start, setStart] = useState(item?.startTime);
//   let [end, setEnd] = useState(item?.endTime);
//   return (
//     <>
//       <div className="d-flex flex-column">
//         <strong>Task:</strong>
//         <input
//           className="my-1 rounded border-0 px-2 shadow-sm"
//           type="text"
//           value={task}
//           onChange={(e) => {
//             setTask(e.target.value);
//             console.log(task);
//           }}
//         />
//         <strong>Start Time:</strong>
//         <input
//           type="text"
//           className="my-1 rounded border-0 px-2 shadow-sm"
//           value={start}
//           onChange={(e) => {
//             setStart(e.target.value);
//           }}
//         />
//         <strong>End Time:</strong>
//         <input
//           type="text"
//           className="my-1 rounded border-0 px-2 shadow-sm"
//           value={end}
//           onChange={(e) => {
//             setEnd(e.target.value);
//           }}
//         />
//       </div>
//       <div className="d-flex flex-column justify-content-between border">
//         <button
//           className="btn btn-danger "
//           onClick={() => {
//             delHandler(item?.id);
//           }}
//         >
//           <i className="fa-solid fa-x "></i>
//         </button>
//         <button
//           onClick={() => {
//             editHandler(item?.id);
//           }}
//           className="btn btn-success"
//         >
//           Edit
//         </button>
//       </div>
//     </>
//   );
// }
