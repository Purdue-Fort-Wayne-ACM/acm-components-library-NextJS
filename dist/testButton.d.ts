import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};
declare const testButton: React.FC<ButtonProps>;

export { testButton as default };
