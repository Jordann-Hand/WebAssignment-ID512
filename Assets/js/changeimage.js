/*
    let backgroundImage = [];
    backgroundImage[0] = "\img\BackgroundImage.jpg";
    backgroundImage[1] = "\img\backgroundImage2.jpeg";
    backgroundImage[2] = "\img\BackgroundImage3.jpg";
    

    function displayNextImage() {
        let x = -1;
        x = (x === backgroundImage.length - 1) ? 0 : x + 1;
        document.getElementById("backgroundImage1").src = backgroundImage[x];
    }
        
    function changeImage(){
        setInterval(displayNextImage, 5000);

   // document.body.style.backgroundImage = "url('"+backgroundImage[i]+"')";
    }
 */

let btnContainer = document.getElementById("#backgroundChange");
let backgroundImage = [];
    backgroundImage[0] = "\img\BackgroundImage.jpg";
    backgroundImage[1] = "\img\backgroundImage2.jpeg";
    backgroundImage[2] = "\img\BackgroundImage3.jpg";

for (let i = 0; i < backgroundImage.length; i++) {
    let current = document.querySelectorAll(".visible");
    current[0].className = current[0].className.replace(" display", "");
    this.className +=" display";
} 
  
  
