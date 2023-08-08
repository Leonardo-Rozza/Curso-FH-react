import { useCounter } from "../hooks/UseCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, species } = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{species}</p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      )}

      <button
        className="btn btn-secondary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Siguiente personaje
      </button>
    </>
  );
};
