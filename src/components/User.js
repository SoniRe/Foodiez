import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //API Calls
  }, []);

  return (
    <div id="user-card">
      <h2>{name}</h2>
      <h3>Dehradun</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

export default User;
