import React, { useState } from "react";
import { hookTypes } from "../constants";
import { BasicStateHook1, BasicStateHook2 } from "../BasicStateHook";
import { BasicEffectHook } from "../BasicEffectHook";
import { CustomHook } from "../CustomHook";
import { ContextHook } from "../ContextHook";
import { BasicReducerHook } from "../BasicReducerHook";
import { BasicRefHook } from "../BasicRefHook";

import "./App.css";

const hookTypesDesk = {
  [hookTypes.STATE1]: { menuItemText: "State Hook 1", component: () => <BasicStateHook1 /> },
  [hookTypes.STATE2]: { menuItemText: "State Hook 2", component: () => <BasicStateHook2 /> },
  [hookTypes.EFFECT]: { menuItemText: "Effect Hook", component: () => <BasicEffectHook /> },
  [hookTypes.CUSTOM]: { menuItemText: "Custom Hook", component: () => <CustomHook /> },
  [hookTypes.CONTEXT]: { menuItemText: "Context Hook", component: () => <ContextHook /> },
  [hookTypes.REDUCER]: { menuItemText: "Reducer Hook", component: () => <BasicReducerHook initialCount={10} /> },
  [hookTypes.REF]: { menuItemText: "Ref Hook", component: () => <BasicRefHook /> },
}

export function App() {
  const [hookType, setHookType] = useState(hookTypes.STATE1);

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