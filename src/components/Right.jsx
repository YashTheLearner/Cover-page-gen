import React from 'react';
import PDF from './PDF';

const Right = ({ images,userImg,isOpen }) => {
  return (
    <div id="right" className={`right ${isOpen? "openr":"closer"} `}>
      <PDF images={images} userImg={userImg} />    
    </div>
  );
};

export default Right;
