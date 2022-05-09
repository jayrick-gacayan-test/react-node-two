import React from 'react';

const Card = (props) => {
    return(
        <div className="product-card-1">
            { props.children }
        </div>
    );
}

export default Card;
