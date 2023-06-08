import React from "react";
import { useDispatch } from "react-redux";
import { decremented } from "../redux/counter";

const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decremented())}>Decrease</button>
    </div>
  );
};

export default Decrement;
