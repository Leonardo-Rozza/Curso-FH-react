import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ name, species }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();

    setBoxSize({ width, height });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-1">{species}</p>
        <footer className="blockquote-footer" ref={pRef}>
          {name}
        </footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
