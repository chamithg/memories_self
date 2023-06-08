import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <h1>Count is: {count}</h1>
    </>
  );
};

export default Count;
