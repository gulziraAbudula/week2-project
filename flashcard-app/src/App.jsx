import { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import { cards as initialCards } from './data/cards';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffled = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  return (
    <div className="app">
      <h1>Flashcard Study App</h1>
      <h2>Let's study the capital of countries together!</h2>
      <h3>total number of card: 3</h3>
      <FlashcardList cards={cards} />
    </div>
  );
}

export default App;