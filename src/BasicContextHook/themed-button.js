import React, { useContext } from "react";
import { ThemeContext } from './theme-context';

export default function ThemedButton(props) {
  const { text } = props;
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      { text }
    </button>
  );
}
