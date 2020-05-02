import React, { useRef } from "react";

export function BasicRefHook() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` fait référence au champ textuel monté dans le DOM
    inputEl.current.value = "";
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Clear</button>
    </>
  );
}

