import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-Examples";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  const { name, species } = !!data && data;

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote name={name} species={species} />}

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
