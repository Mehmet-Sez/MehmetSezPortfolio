

let fullImageBox = document.getElementById("fullImageBox");
let fullImageWrap = document.getElementById("fullImageWrap");
let galleryArrowLeftFull = document.getElementById("galleryArrowLeftFull");
let galleryArrowRightFull = document.getElementById("galleryArrowRightFull");
let fullImage = document.getElementById("fullImage");
let contentBox = document.getElementById("contentBox");
let body = document.getElementById("body");
let header = document.getElementById("header");
let imageTitle = document.getElementById("imageTitle");
let imageDate = document.getElementById("imageDate");
let pic;
let imageTitleNew;
let imageDateNew;

var imageArray = [];
var currentIndex;
var currentImage;
let nextImage;

function imageGallery(allDiv) {
    let totalImages = allDiv.getElementsByClassName("image-cover");
    imageArray = Array.from(totalImages);
}

function forwardArrow() {
    let nextIndex = ++currentIndex;
    nextImage = imageArray.at(nextIndex);
    if (nextIndex >= imageArray.length) {
        openFullImage(imageArray.at(0));
    } else {
        openFullImage(nextImage);
    }
}

function backwardArrow() {
    let nextIndex = --currentIndex;
    nextImage = imageArray.at(nextIndex);
    if (nextIndex === -1) {
        openFullImage(imageArray.at(imageArray.length-1));
    } else {
        openFullImage(nextImage);
    }
}

function openFullImage(div) {
    imageGallery(div.parentElement);
    currentImage = div;
    currentIndex = div.id;
    pic = div.getElementsByClassName("image")[0];
    imageTitleNew = div.getElementsByClassName("imageTitleText")[0];
    imageDateNew = div.getElementsByClassName("imageDateText")[0];
    fullImage.src = pic.src;
    imageTitle.innerText = imageTitleNew.innerText;
    imageDate.innerText = imageDateNew.innerText;
    fullImageWrap.style.display = "flex";
    fullImageWrap.style.transition = "all 1s";
    fullImageBox.style.display = "flex";
    galleryArrowLeftFull.style.display = "flex";
    galleryArrowRightFull.style.display = "flex";
    fullImage.src = pic.src;
    imageTitle.innerText = imageTitleNew.innerText;
    imageDate.innerText = imageDateNew.innerText;
    contentBox.style.filter = "blur(5px)";
    body.style.height = "100%";
    body.style.overflowY = "hidden";
    navLinks.style.filter = "blur(5px)";
    workLinks.style.filter = "blur(5px)";
}

function closeFullImage() {
    fullImageWrap.style.display = "none";
    fullImageBox.style.display = "none";
    galleryArrowLeftFull.style.display = "none";
    galleryArrowRightFull.style.display = "none";
    contentBox.style.filter = "blur(0px)";
    body.style.height = "0";
    body.style.overflowY = "scroll";
    navLinks.style.filter = "blur(0px)";
    workLinks.style.filter = "blur(0px)";
}