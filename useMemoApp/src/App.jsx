import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("CALCULATION RUN");

    return number * 100;
  }, [number]);

  console.log("RENDER");

  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default App;