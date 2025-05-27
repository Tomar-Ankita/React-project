import React, { useContext } from 'react';
import { Context } from './App.js'; // ✅ FIX: match case with App.js

function ChildC() {
  const { theme, setTheme } = useContext(Context);

  function handleClick() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      <button onClick={handleClick}>Change Theme</button>
    </>
  );
}

export default ChildC;
