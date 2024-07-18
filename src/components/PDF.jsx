import React from 'react';
import Draggable from 'react-draggable';

const PDF = ({ images,userImg }) => {
  return (
    <div id="contentToConvert" className="pdf">
      <div className="border">
        <Draggable><input type="text" id='heading' placeholder='UNIVERSITY INSTITUTE OF TECHNOLOGY' /></Draggable>
        <Draggable><div className={`rgpvlogo  ${userImg ? 'hidden':''}`}></div></Draggable>

        <div className="draggable-container">
          {images && images.length > 0 ? (
            images.map((src, index) => (
              <Draggable key={index}>
                <div className="draggable-item">
                  <img className={`newlogo ${userImg ? '':'hidden'}`} src={src} alt={`Uploaded ${index}`} />
                </div>
              </Draggable>
            ))
          ) : (
            <div></div>
          )}
        </div>

        <Draggable>
          <div className='flex-col'>
            <input type="text" className='subHeading' placeholder='RGPV' id='heading' />
            <input type="text" className='subHeading' placeholder='YEAR: 2024' />
            <input type="text" className='subHeading' placeholder='SEMESTER - 02' />
            <input type="text" className='subHeading' placeholder='Communication' />
            <input type="text" className='subHeading' placeholder='BOOK REVIEW' />
          </div>
        </Draggable>

        <div className='flex'>
          <Draggable>
            <div className='flex-col'>
              <input type="text" className='subHeading' placeholder='Submitted by:' />
              <input type="text" className='subHeading' placeholder='Yash Rajput' />
              <input type="text" className='subHeading' placeholder='0101EC231156' />
            </div>
          </Draggable>
          <Draggable>
            <div className='flex-col'>
              <input type="text" className='subHeading' placeholder='Submitted to:' />
              <input type="text" className='subHeading' placeholder='RGPV' />
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
}

export default PDF;
