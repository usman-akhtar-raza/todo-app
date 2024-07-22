import React from "react";
import Card from "./UI/Card";
export default function EmptyList() {
  return (
    <>
      <Card className="d-flex justify-content-center py-5">
        <h1
          className="bg-light  rounded py-2 text-center text-danger"
          style={{ width: 400 }}
        >
          There is no task yet!!.
        </h1>
      </Card>
    </>
  );
}
