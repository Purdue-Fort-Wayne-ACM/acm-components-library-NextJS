import React from 'react';

interface CustomImageProps {
    width?: number;
    height?: number;
    className?: string;
}
declare function Logo({ width, height, className }: CustomImageProps): React.JSX.Element;

export { Logo as default };
