import React__default from 'react';

declare function ThemeProvider({ children }: {
    children: React__default.ReactNode;
}): React__default.JSX.Element;
declare const ThemeContext: React__default.Context<{
    theme: string;
    toggleTheme: () => void;
}>;

export { ThemeContext, ThemeProvider, ThemeProvider as default };
