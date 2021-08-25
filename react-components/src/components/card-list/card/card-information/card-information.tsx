import React from "react";

export function CardInformation() {
  return <div className="card__information">
      <header className="card__header">
        <h3>400 BYN</h3>        
      </header>
      <div className="card__content">
        <h2 className="card__title">Item 1</h2>
        <p className="card__description">The best item in the world</p>
      </div>
      <footer className="card__footer">
        <div className="card__date">27/07/2021</div>
        <div className="card__like">
          <img src="" alt="" />
        </div>
        <div className="card__message">
          <img src="" alt="" />
        </div>
      </footer>
    </div>
} 