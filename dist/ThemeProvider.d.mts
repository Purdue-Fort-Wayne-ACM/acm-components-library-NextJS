import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare const ThemeContext: React.Context<{
    theme: string;
    toggleTheme: () => void;
}>;

export { ThemeContext, ThemeProvider, ThemeProvider as default };
