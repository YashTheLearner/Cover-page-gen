
    document.getElementById('downloadPDF').addEventListener('click', function() {
        var element = document.getElementById('contentToConvert');
        
        html2canvas(element).then(canvas => {
            var imgData = canvas.toDataURL('image/png');
            var pdf = new jsPDF();
            var imgWidth = 210;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('download.pdf');
        });
    });

