import { useState } from 'react';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [cards, setCards] = useState([1, 2]);

  const removeCard = (id) => {
    setCards(list => list.filter(c => c !== id));
  };

  const addCard = () => {
    setCards(list => [...list, Math.max(0, ...list) + 1]);
  };

  return (
    <>
      {cards.map((c) => (
        <UserCard key={c} id={c} onRemove={removeCard} />
      ))}

      <button onClick={addCard}>
        addcard
      </button>
    </>
  );
}

export default App;
