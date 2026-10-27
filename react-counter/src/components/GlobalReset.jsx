import { useState } from "react";
import Counter from "./Counter";
import "./Counter.css";

const GlobalReset = () => {
    const [counters, setCounts] = useState([
        { id: 1, count: 0 },
        { id: 2, count: 1 },
        { id: 3, count: 9 }
    ]);

    const increment = (id) => {
        setCounts(
            counters.map((counter) =>
                counter.id === id && counter.count < 50
                    ? { ...counter, count: counter.count + 1 }
                    : counter
            )
        );
    };

    const decrement = (id) => {
        setCounts(
            counters.map((counter) =>
                counter.id === id && counter.count > 0
                    ? { ...counter, count: counter.count - 1 }
                    : counter
            )
        );
    };

    const resetAll = () => {
        setCounts(
            counters.map((counter) => ({
                ...counter,
                count: 0
            }))
        );
    };

    return (
        <>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    id={counter.id}
                    count={counter.count}
                    increment={increment}
                    decrement={decrement}
                />
            ))}

            <button id="reset-btn" onClick={resetAll}>
                Reset ALL
            </button>
        </>
    );
};

export default GlobalReset;
