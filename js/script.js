const imageContainerE1 = document.querySelector('.image-container')
const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");

let timer = 0;
let x = 0;

prevE1.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallary();
});
nextE1.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallary();
});

function updateGallary() {
    imageContainerE1.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallary();
    }, 3000);
}

updateGallary();