import React from 'react';

const Card = ({ name, email, id, username }) => {
  return (
    <div className='tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <h3>{email}</h3>
      </div>
    </div>
  );
}

export default Card;