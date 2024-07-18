import React from 'react';

const Header = ({ handleDownloadPdf, handleFileUpload, setIsOpen }) => {
  return (
    <div className="navbar">
      <div className="nav1">
        <button style={{ backgroundColor: "#323639", border: "none" }} 
        onClick={() => { setIsOpen((prev) => !prev); }}
        ><div className="ham"></div></button>
        <div className="logo">PDF Editor</div>
      </div>
      {/* <div className="controls">
        <div className="con1">
          <div className="icn" style={{ backgroundColor: "black" }}>
            1
          </div>
          <div className="icn">/</div>
          <div className="icn">1</div>
        </div>
        <div className="con2">
          <div className="minus icn"></div>
          <div className="zoom">100%</div>
          <div className="plus icn"></div>
        </div>
        <div className="con3">
          <div id="fit" className="icn svg2"></div>
          <div id="rotate" className="icn svg3"></div>
        </div>
      </div> */}
      
      <div className='flex2'>
        
      <label className='label-button' htmlFor="file-upload"> Change Logo </label>
        <input
          type="file" 
          id="file-upload"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          style={{ marginBottom: '20px' }}
        />
      </div>
        <button className="download-button" onClick={handleDownloadPdf}>
          <svg
            className="download-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            role="img"
          >
            <path
              fill="currentColor"
              d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 18v2h16v-2H4z"
            />
          </svg>
          Download
        </button>
      
    </div>
  );
};

export default Header;
