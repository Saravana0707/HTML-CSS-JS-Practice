var newImage,showImage;
function getFile(event){
    showImage=document.getElementById('showImage');
    showImage.src=URL.createObjectURL(event.target.files[0]);
    newImage=document.createElement('img');
    newImage.src=URL.createObjectURL(event.target.files[0]);

    showImage.onload=function(){
        URL.revokeObjectURL(showImage.src);
    }
}

function convert(){
    console.log(newImage)
    var doc = new jsPDF();
    doc.addImage(newImage,10,10);
    doc.save('ImgToPDF.pdf')
    }