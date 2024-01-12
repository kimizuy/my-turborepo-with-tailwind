import { useState } from "react";
import "./counter.css";

export default function Counter({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}): JSX.Element {
  const [count, setCount] = useState(initialCount);
  const add = (): void => {
    setCount((i) => i + 1);
  };
  const subtract = (): void => {
    setCount((i) => i - 1);
  };

  return (
    <>
      <div className="counter">
        <button onClick={subtract} type="button">
          -
        </button>
        <pre>{count}</pre>
        <button onClick={add} type="button">
          +
        </button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
