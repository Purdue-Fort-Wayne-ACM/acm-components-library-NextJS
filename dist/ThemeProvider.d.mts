import { React } from 'react';

declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): any;
declare const ThemeContext: any;

export { ThemeContext, ThemeProvider as default };
