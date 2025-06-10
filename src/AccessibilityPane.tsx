import "./index.css"
import React from 'react'

export default function AccessibilityPane({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<>
        <div className="accessibilityPanel">
            {children}
        </div>
    </>)
}