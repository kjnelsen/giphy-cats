import React from 'react';

type CardProps = {
    url: string;
}

const Card = ({url}:CardProps) => {

    return (
        <div className={'card'}>
            <iframe src={url} width="480" height="480" frameBorder="0"
                    className="giphy-embed" allowFullScreen/>
        </div>
    )
};

export default Card;