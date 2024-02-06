const url = "https://api.thecatapi.com/v1/images/search";
const api_key = "live_vVTAe7S6LzhkFDE7wVTNBJKCwmKQFFfPfk8LcKbNUjCEGBxNfjVR7jglfUqHdcqK"

let logo = document.querySelector("#logo");
let clicked = false;

logo.addEventListener("click", (e) => {
    if(!clicked) {
        logo.src = "./resources/img/kitty2.png";
        clicked = true;
    } else {
        logo.src = "./resources/img/kitty.png";
        clicked = false;
    }
});

function update() { 
    fetch(url,{headers: {
        'x-api-key': api_key
    }})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
    let imagesData = data;
    imagesData.map(function(imageData) {
        let image = document.querySelector("#kitti-photo");
        image.src = `${imageData.url}`;
    });
    })
}


function notif(type) {
    let alert = document.querySelector(".snackbar");
    let textAlert = document.querySelector(".snackbar-js-p");

    alert.classList.add("snackbar-js");
    
    if(type == 'like'){
        textAlert.innerText = "You liked this cat :D";
        alert.classList.add("show");
        alert.style.backgroundColor = 'green';
    } else if(type == 'dislike'){
        textAlert.innerText = "You disliked this cat :(";
        alert.classList.add("show");
        alert.style.backgroundColor = '#EA3D3D';
    } else if(type == 'skip') {
        textAlert.innerText = "You skipped this cat :/";
        alert.classList.add("show");
        alert.style.backgroundColor = "gray";
    }

    setTimeout(() => {
        alert.classList.remove("show")
    }, 1000);
}

function dislike() {
    update()
}

function skip() {
    update()
}

function like() {
    update()
}
