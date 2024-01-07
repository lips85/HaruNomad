const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

let bgImage = document.createElement("img");
bgImage.classList.add('bgimage');

bgImage.src = `img/${chosenImage}`;

document.body.append(bgImage);
