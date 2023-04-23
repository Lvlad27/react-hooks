// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
  PokemonForm,
  fetchPokemon,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon';

function PokemonInfo({pokemonName}) {
  const [status, setStatus] = React.useState('idle');
  const [pokemon, setPokemon] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');
    fetchPokemon(pokemonName)
      .then((pokemonData) => {
        setPokemon(pokemonData);
        setStatus('resolved');
      })
      .catch((error) => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  return (
    <>
      {status === 'idle' && 'Submit a pokemon!'}
      {status === 'pending' && <PokemonInfoFallback />}
      {status === 'rejected' && (
        <div role="alert">
          There was an error:{' '}
          <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
        </div>
      )}
      {status === 'resolved' && <PokemonDataView pokemon={pokemon} />}
    </>
  );
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('');

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  );
}

export default App;
