const rotatingImages = [
    '/images/rotatingHomeImage_1.jpg',
    '/images/rotatingHomeImage_2.jpg',
    '/images/rotatingHomeImage_3.jpg',
    '/images/rotatingHomeImage_4.jpg',
    '/images/rotatingHomeImage_5.jpg',
]

let rotatingImageIndex = 0

function displayNextImage(){
    let image = document.getElementById("rotating-image")
    if(rotatingImageIndex === 5){
        rotatingImageIndex = 0
    }
    image.src = rotatingImages[rotatingImageIndex]
    rotatingImageIndex++
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}