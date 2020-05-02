import React, { useState } from "react";
import { hookTypes } from "../constants";
import { BasicStateHook } from "../BasicStateHook";
import { BasicEffectHook } from "../BasicEffectHook";
import { CustomHook } from "../CustomHook";
import { ContextHook } from "../ContextHook";

import "./App.css";

const hookTypeDesk = {
  [hookTypes.STATE]: () => <BasicStateHook />,
  [hookTypes.EFFECT]: () => <BasicEffectHook />,
  [hookTypes.CUSTOM]: () => <CustomHook />,
  [hookTypes.CONTEXT]: () => <ContextHook />,
  // [hookTypes.REDUCER]: () => <BasicReducerHook />
}

export function App() {
  const [hookType, setHookType] = useState(hookTypes.STATE);

  function onChangeHookType(FeatureType) {
    setHookType(FeatureType);
  }

  return (
    <div className="App">
      <header>
        <ul id="navigation">
          <li><a href="#" onClick={() => onChangeHookType(hookTypes.STATE)}>State Hook</a></li>
          <li><a href="#" onClick={() => onChangeHookType(hookTypes.EFFECT)}>Effect Hook</a></li>
          <li><a href="#" onClick={() => onChangeHookType(hookTypes.CUSTOM)}>Custom Hook</a></li>
          <li><a href="#" onClick={() => onChangeHookType(hookTypes.CONTEXT)}>Context Hook</a></li>
        </ul>
      </header>
      <main>
        { hookTypeDesk[hookType]() }
      </main>
      <footer></footer>
    </div>
  );
}