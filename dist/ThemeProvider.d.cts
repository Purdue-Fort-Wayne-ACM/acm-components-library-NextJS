import React from 'react';

declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): React.JSX.Element;
declare const ThemeContext: React.Context<{
    theme: string;
    toggleTheme: () => void;
}>;

export { ThemeContext, ThemeProvider, ThemeProvider as default };
