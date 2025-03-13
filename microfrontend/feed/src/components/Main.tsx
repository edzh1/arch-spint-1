import React from 'react';
import Card from './Card.tsx';
import useGlobalStore from "store/store"

// @ts-ignore
function Main({ onCardClick, onCardLike, onCardDelete }) {
    // @ts-ignore
    const {cards} = useGlobalStore();

  return (
      <section className="places page__section">
        <ul className="places__list">
            {/* @ts-ignore */}
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
  );
}

export default Main;
