import React from 'react';

const Info = ({title, image}) => {
  return (
    <div className="Info">
      <img src={image} alt={title}/>
      <h2>{title}</h2>
    </div>
  );
}

export default Info;
