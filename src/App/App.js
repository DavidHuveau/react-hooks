import React, { useState } from 'react';
import { hookTypes } from '../constants'
import BasicStateHook from '../BasicStateHook/BasicStateHook';
import BasicEffectHook from '../BasicEffectHook/BasicEffectHook';
import './App.css';

const hookTypeDesk = {
  [hookTypes.STATE]: () => <BasicStateHook />,
  [hookTypes.EFFECT]: () => <BasicEffectHook />,
}

function App() {
  const [hookType, setHookType] = useState(hookTypes.STATE);

  function onChangeHookType(FeatureType) {
    setHookType(FeatureType);
  }

  return (
    <div className="App">
      <header>
        <ul id="navigation">
          <li><a href="#" onClick={() => onChangeHookType(hookTypes.STATE)}>Basic State Hook</a></li>
          <li><a href="#" onClick={() => onChangeHookType(hookTypes.EFFECT)}>Basic Effect Hook</a></li>
        </ul>
      </header>
      <main>
        { hookTypeDesk[hookType]() }
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
