import './App.css';
import { useState } from 'react';
import ValentinePrompt from './components/ValentinePrompt';
import ResponseMessage from './components/ResponseMessage';
import ButtonField from './components/ButtonField';

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  return (
    <div className="app">
      <main className="card">
        <div className="badge" aria-hidden="true">
          xoxo
        </div>
        <ValentinePrompt />
        <ResponseMessage accepted={accepted} />
        <ButtonField accepted={accepted} onAccept={handleAccept} />
      </main>
    </div>
  );
}

export default App;
