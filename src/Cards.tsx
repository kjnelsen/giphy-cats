import React from 'react';
import Card from './Card'

type cardsArray = {
    cards: Array<any>;
}

const Cards = ({cards}:cardsArray) => {

    return (
        <div className={'flex-container'}>
            {cards.map((card) => {
                return <Card key={card.id} url={card.embed_url}/>
            })}
        </div>
    )
}

export default Cards;