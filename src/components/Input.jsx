import { useState } from "react";

const Input = ({ name = "", submit, id, cancel }) => {
  const [value, setValue] = useState(name);
  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <span
        onClick={() => {
          submit(id, value);
          cancel();
        }}
      >
        ✅
      </span>
      <span onClick={cancel}>❌</span>
    </>
  );
};

export default Input;
