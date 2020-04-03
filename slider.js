let images = document.querySelectorAll('#gallery img');
let i = 0;

updateInfo();

function prevImg() {
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
    updateInfo();
}

function nextImg() {
    images[i].style.display = 'none';
    i = i + 1;
    if(i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
    updateInfo();
}

function updateInfo(){
    document.getElementById("imgCount").innerHTML = (i + 1) + " из " + images.length;
}
