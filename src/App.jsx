import { useState } from "react";

function App() {
  // state (état, données)
  const [prenom, setPrenom] = useState("Mathis");
  const [count, setCount] = useState(1);

  // comportements
  const handleClick = () => {
    setCount(count + 1);
  };

  // affichage (render)
  return (
    <div>
      <h1>Bonjour {prenom}</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Incrémenter</button>
    </div>
  );
}

export default App;
