import React from 'react';
import Draggable from 'react-draggable';

const DraggableImageUploader = ({ images }) => {
  return (
    <div>
      <div className="draggable-container">
        {images.map((src, index) => (
          <Draggable key={index}>
            <div className="draggable-item">
              <img className="logo" src={src} alt={`Uploaded ${index}`} />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DraggableImageUploader;
