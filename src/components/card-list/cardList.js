import React from 'react';
import './cardList.css';
import Card from '../card/card';

const CardList = (props) => {

    return (

        <div className="card-list">

            { props.monsters.map((monster, i) => <Card key={i} monster={monster} />) }
            
        </div>

    );

};

export default CardList;