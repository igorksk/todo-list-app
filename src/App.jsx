import { useState } from 'react'
import './App.css'

function App() {
  const [cards, setCards] = useState([1, 2]);

  return (
    <>
      {cards.map(c =>  
        <div className="card" key={c}>
          <p>Task {c}</p>
          <button onClick={() => setCards(list => list.filter(l => l !== c))}>
            Remove
          </button>
        </div>
      )}
    
      <button 
        className="add-btn"
        onClick={() => setCards(list => [...list, Math.max(...list) + 1])}
      >
        Add Card
      </button>
    </>
  )
}

export default App