import React from 'react';
const Card = ({ name,poster }) => (
  <>
  <div className="column col-3 col-mr-auto">
    <div className="card">
      <div className="card-image">
        <img src={poster} className="img-responsive"alt="Product" />
      </div>
      <div className="card-header">
        <div className="card-title h5">{name}</div>
      </div>
    </div>
  </div>
  </>
);

export default Card;