import React from 'react';


const Cards = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={ () => props.selectCharacter(props.name) } 
            >
                <img  src={props.image } />
            </a>
        </div>
    </div>
);

export default Cards;
