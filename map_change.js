function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}


function startTimer() {
    setInterval(displayNextImage, 500);
}

var images = [], x = -1;
images[0] = "images/img1.jpeg";
images[1] = "images/img2.jpeg";
images[2] = "images/img3.jpeg";
images[3] = "images/img4.jpeg";
images[4] = "images/img5.jpeg";
images[5] = "images/img6.jpeg";
images[6] = "images/img7.jpeg";
images[7] = "images/img8.jpeg";
images[8] = "images/img9.jpeg";
images[9] = "images/img10.jpeg";
images[10] = "images/img11.jpeg";
images[11] = "images/img12.jpeg";