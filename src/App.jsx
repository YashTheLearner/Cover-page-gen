import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  const [images, setImages] = useState([]);
  const [userImg, setUserImg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newImages = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
          setUserImg(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadPdf = () => {
    const input = document.getElementById('right').firstElementChild;

    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
        pdf.save('download.pdf');
      })
      .catch((err) => {
        console.error('Error generating PDF:', err);
      });
  };

  return (
    <div>
      <Header handleDownloadPdf={handleDownloadPdf} handleFileUpload={handleFileUpload} setIsOpen={setIsOpen} />
      <div className="hero">
        <Left images={images} isOpen={isOpen}/>
        <Right images={images} userImg={userImg} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default App;
