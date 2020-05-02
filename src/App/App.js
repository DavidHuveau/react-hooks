import React, { useState } from "react";
import { hookTypes } from "../constants";
import { BasicStateHook } from "../BasicStateHook";
import { BasicEffectHook } from "../BasicEffectHook";
import { CustomHook } from "../CustomHook";
import { ContextHook } from "../ContextHook";
import { BasicReducerHook } from "../BasicReducerHook";

import "./App.css";

const hookTypeDesk = {
  [hookTypes.STATE]: { menuItemText: "State Hook", component: () => <BasicStateHook /> },
  [hookTypes.EFFECT]: { menuItemText: "Effect Hook", component: () => <BasicEffectHook /> },
  [hookTypes.CUSTOM]: { menuItemText: "Custom Hook", component: () => <CustomHook /> },
  [hookTypes.CONTEXT]: { menuItemText: "Context Hook", component: () => <ContextHook /> },
  [hookTypes.REDUCER]: { menuItemText: "Reducer Hook", component: () => <BasicReducerHook initialCount={10} /> },
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
          { Object.keys(hookTypeDesk).map(key => {
            return (
              <li>
                <a href="#" onClick={() => onChangeHookType(key)}>
                  { hookTypeDesk[key]["menuItemText"] }
                </a>
              </li>
            );
          }) }
        </ul>
      </header>
      <main style={{ paddingTop: "20px" }}>
        { hookTypeDesk[hookType]["component"]() }
      </main>
      <footer></footer>
    </div>
  );
}