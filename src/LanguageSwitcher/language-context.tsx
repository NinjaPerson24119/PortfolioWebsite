import { createContext } from 'react';

export type Language = 'english' | 'french';
export interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}
export const LanguageContext = createContext<LanguageContextProps>({
  language: 'english',
  setLanguage: () => undefined,
});
