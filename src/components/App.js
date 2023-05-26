import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const appClass = darkMode ? "App dark" : "App light"

  function handleClickMode() {
    setDarkMode(darkMode => !darkMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClickMode}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
