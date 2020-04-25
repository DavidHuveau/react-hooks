import React from 'react';
import BasicStateHook from '../BasicStateHook/BasicStateHook';
import BasicEffectHook from '../BasicEffectHook/BasicEffectHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
        {/* <BasicStateHook /> */}
        <BasicEffectHook />
      <footer></footer>
    </div>
  );
}

export default App;
