import { useEffect, useLayoutEffect, useState } from "react";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch, AppState } from "./store";

export type Mode = "light" | "dark";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<Mode>("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: Mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    setMode(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme !== "" && setTheme(localTheme as Mode);
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
