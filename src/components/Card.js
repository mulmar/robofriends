import React, { Fragment } from 'react';

const Card = (fromCardList) => {//the card component gets input from the cardlist
 //   const {name, email, id } = fromCardList;
    return(
        <Fragment>
        <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${fromCardList.id}?200x200`} />
            <div>
                <h2>{fromCardList.name}</h2>
                <p>{fromCardList.email}</p>
            </div>
        </div>
        </Fragment>
    );
}

export default Card;