function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}


function startTimer() {
    setInterval(displayNextImage, 1000);
}

var images = [], x = -1;
images[0] = "images/img1.jfif";
images[1] = "images/img2.jfif";
images[2] = "images/img3.jfif";