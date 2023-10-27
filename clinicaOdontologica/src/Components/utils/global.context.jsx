import { createContext, useContext, useMemo, useState } from "react";

export const initialState = {theme: "", data: []} 

export const themes = {
  light: {
    type: "light",
    font: "black",
    background: "white",
  },
  dark: {
    type: "dark",
    font: "white",
    background: "black",
  },
};

export const GlobalContext = createContext(initialState); 

export function useGlobal() { 
  return useContext(GlobalContext);
}

export function GlobalProvider({ children }){ 
    
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    console.log("entro al boton");
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  const tema = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <GlobalContext.Provider value={tema}>
      {children}
    </GlobalContext.Provider>
  );
}