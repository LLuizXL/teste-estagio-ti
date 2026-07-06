// src/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../js/themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  //  verifica se já tem algo salvo no localStorage, senão usa 'light'
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Esse useEffect roda sempre que o tema muda
  useEffect(() => {
    const root = document.documentElement; // pega o que tem na raiz do projeto
    const currentTheme = themes[themeName];

    // Aplica as cores nas variáveis globais da raiz do projeto
    root.style.setProperty("--bgcolor", currentTheme.bg);
    root.style.setProperty("--headercolor", currentTheme.headercolor);
    root.style.setProperty("--primarycolor", currentTheme.primarycolor);
    root.style.setProperty("--secondarycolor", currentTheme.secondarycolor);
    root.style.setProperty("---cardbg", currentTheme.cardbg);

    // Salva no localStorage para não perder ao recarregar
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  // Função para alternar entre 'light' e 'dark'
  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook customizado (Nao consegui colocar esse hook em um arquivo separado)
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
}
