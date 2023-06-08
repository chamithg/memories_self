import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changed } from "../redux/counter";

const Change = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="number" onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => dispatch(changed(value))}>Change</button>
    </div>
  );
};

export default Change;
