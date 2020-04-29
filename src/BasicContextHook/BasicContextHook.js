import React, { useContext } from "react";
import { themes } from "../constants";

const ThemeContext = React.createContext(themes.light);

export default function basicContextHook() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  const menuItems = ["File", "Edition", "Tools", "About"]
  return (
    <>
    { menuItems.map((menuItem, index) => <ThemedButton key={index} text={menuItem}/>) }
    <SwitchTheme />
    </>
  );
}

function ThemedButton(props) {
  const { text } = props;
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      { text }
    </button>
  );
}

function SwitchTheme() {
  return <button onClick={() => {}}>Switch theme</button>
}