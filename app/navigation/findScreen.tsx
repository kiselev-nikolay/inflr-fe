import React from 'react';
import screens from '../screens/Index';


export function findScreen(screenId: number) {
  return (
    screens.get(screenId)
  );
}