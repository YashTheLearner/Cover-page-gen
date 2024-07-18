import React from 'react';
import PDF from './PDF';

const Right = ({ images,userImg }) => {
  return (
    <div id="right" className="right">
      <PDF images={images} userImg={userImg} />    
    </div>
  );
};

export default Right;
