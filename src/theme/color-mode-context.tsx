import { createContext } from "react";

export type ColorMode = 'dark' | 'light';
export interface ColorModeContextProps {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}
export const ColorModeContext = createContext<ColorModeContextProps>({
  colorMode: 'dark',
  toggleColorMode: () => {},
});
