"use client"
import React, { useState, useEffect } from 'react';
import { Accessibility, AArrowUp, AArrowDown, Settings, ZoomIn, ZoomOut, Moon, Sun, Eye, Contrast } from 'lucide-react';
import AccessibilityPane from './AccessibilityPane';
import AccessibilityButton from './AccessibilityButton';
import "../styles.css"

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState('contrast(100%)');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    (document.body.childNodes as NodeListOf<HTMLElement>).forEach((e) => {e.style.filter = `${contrast} ${filter}`});
    
  }, [fontSize, contrast, filter]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));

  const toggleContrast = () => {
    setContrast(prev => prev === 'contrast(100%)' ? 'contrast(250%)' : 'contrast(100%)');
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <> 
      <button
        onClick={() => setIsOpen(true)}
        className="m-4 accessibilityButton"
        aria-label="Open Accessibility Menu"
      >
        <Accessibility strokeWidth={2.5} className="half-ratio-icon" size={24} aria-hidden="true" />
      </button>

      {isOpen && (
        // Content for the menu
        <AccessibilityPane>
          <div className="A-ButtonGrid">
            <AccessibilityButton onClick={increaseFontSize}  icon={<AArrowUp className="half-ratio-icon"/>} buttonText="Increase Font Size"/>
            <AccessibilityButton onClick={decreaseFontSize}  icon={<AArrowDown className="half-ratio-icon"/>} buttonText="Decrease Font Size"/>
            <AccessibilityButton onClick={toggleContrast}  icon={<Contrast className="half-ratio-icon"/>} buttonText="Toggle High Contrast"/>

            
          </div>
          <div className="A-Pane-CloseButton-Container">
            <button className="A-Pane-CloseButton" onClick={() => setIsOpen(false)}>Close Pane</button>
          </div>
        </AccessibilityPane>
        // Add Dictionary support once API is setup
      )}
    </>
  );
};

export default AccessibilityWidget;