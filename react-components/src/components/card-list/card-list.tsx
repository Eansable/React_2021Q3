import React from 'react';
import './card-list.css';
import { Card } from './card/card';

export function CardList() {
  return <div className="card-list">
    <Card />
    <Card />
    <Card />

  </div>
}