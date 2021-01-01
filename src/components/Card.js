import React from 'react';

const Card = ({ id , name , email }) => {
    return (
        <div className="dib br3 pa3 ma2 bg-light-green grow bw2 shadow-5 tc">
            <img alt='foto' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;