import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <main>
        <section>
          <h2>{count}</h2>
          <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Counter;
