import React from "react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import Card from "./UI/Card";

export default function TaskList({ data ,setData , updateData}) {
  return (
    <Card className=" py-5 d-flex justify-content-center flex-wrap bg-transparent">
      <TaskItem data={data} setData={setData} updateData={updateData} />
    </Card>
  );
}
