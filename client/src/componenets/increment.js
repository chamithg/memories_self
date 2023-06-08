import React from "react";
import { useDispatch } from "react-redux";
import { incremented } from "../redux/counter";

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(incremented())}>Increase</button>
    </div>
  );
};

export default Increment;
