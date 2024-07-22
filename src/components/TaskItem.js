import React from "react";
import ItemInputField from "./ItemInputField";
import { useState } from "react";
export default function TaskItem({ data, setData, updateData }) {
  // const [taskUpdate, setTaskUpdate] = useState(data);
  const delHandler = (id) => {
    setData(id);
  };

  const editHandler = (id) => {
    updateData(id);
    // console.log(id);
  };
  return (
    <>
      {data.map((item, index) => (
        <div
          key={item?.id}
          style={{ width: 300 }}
          className="d-flex justify-content-between p-2 border rounded-3 mx-1 my-3 bg-light"
        >
          <ItemInputField
            item={item}
            delHandler={delHandler}
            editHandler={editHandler}
            updateData={updateData}
          />
        </div>
      ))}
    </>
  );
}
