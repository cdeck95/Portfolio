import { Button } from '@mui/material';
import React from 'react';
import { Sun, Moon } from 'react-feather';

export default function DarkModeToggleSwitch ({ on, toggle }) {
  const props = {
    type: 'button',
    role: 'switch',
    onClick: (typeof toggle === 'function') ? toggle : () => {},
    'aria-checked': (on = on === true)
  };

  return <Button {...props}>{ on ? <Sun /> : <Moon /> }</Button>
}