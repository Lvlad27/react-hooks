// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react';

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  );
}

function FavoriteAnimal({animal, onAnimalChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  );
}

function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>;
}

function App() {
  const [name, setName] = React.useState('');
  const [animal, setAnimal] = React.useState('');

  const onNameChange = (event) => setName(event.target.value);
  const onAnimalChange = (event) => setAnimal(event.target.value);

  return (
    <form>
      <Name name={name} onNameChange={onNameChange} />
      <FavoriteAnimal animal={animal} onAnimalChange={onAnimalChange} />
      <Display name={name} animal={animal} />
    </form>
  );
}

export default App;
