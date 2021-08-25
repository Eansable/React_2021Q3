import React from "react";
import { CardImage } from "./card-image/card-image";
import { CardInformation } from "./card-information/card-information";
import './card.css'

export function Card() {
  return <div className="card" >
      <CardImage />
      <CardInformation />
     </div>
}