import React, { useState } from "react";
import { hookTypes } from "../constants";
import { BasicStateHook } from "../BasicStateHook";
import { BasicEffectHook } from "../BasicEffectHook";
import { CustomHook1 } from "../CustomHook";
import { CustomHook2 } from "../CustomHook";
import { ContextHook } from "../ContextHook";
import { BasicReducerHook } from "../BasicReducerHook";
import { BasicRefHook } from "../BasicRefHook";

import "./App.css";

const hookTypesDesk = {
  [hookTypes.STATE]: { menuItemText: "State Hook", component: () => <BasicStateHook /> },
  [hookTypes.EFFECT]: { menuItemText: "Effect Hook", component: () => <BasicEffectHook /> },
  [hookTypes.CUSTOM1]: { menuItemText: "Custom Hook1", component: () => <CustomHook1 /> },
  [hookTypes.CUSTOM2]: { menuItemText: "Custom Hook2", component: () => <CustomHook2 /> },
  [hookTypes.CONTEXT]: { menuItemText: "Context Hook", component: () => <ContextHook /> },
  [hookTypes.REDUCER]: { menuItemText: "Reducer Hook", component: () => <BasicReducerHook initialCount={10} /> },
  [hookTypes.REF]: { menuItemText: "Ref Hook", component: () => <BasicRefHook /> },
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
          { Object.keys(hookTypesDesk).map((key, index) => {
            return (
              <li key={index}>
                <a href="#" onClick={() => onChangeHookType(key)}>
                  { hookTypesDesk[key]["menuItemText"] }
                </a>
              </li>
            );
          }) }
        </ul>
      </header>
      <main style={{ paddingTop: "20px" }}>
        { hookTypesDesk[hookType]["component"]() }
      </main>
      <footer></footer>
    </div>
  );
}