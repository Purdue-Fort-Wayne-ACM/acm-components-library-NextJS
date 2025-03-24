import * as react_jsx_runtime from 'react/jsx-runtime';
import { Metadata } from 'next';
import React from 'react';

declare const metadata: Metadata;
declare function RootLayout({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

export { RootLayout as default, metadata };
