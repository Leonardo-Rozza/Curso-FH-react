import { useCounter } from "../hooks/UseCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter(5);

  return (
    <>
      <h1>CounterWithCustomHook: XXX- {counter} </h1>
      <hr />
      <button onClick={() => increment()} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => decrement()} className="btn btn-primary">
        -1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
    </>
  );
};
