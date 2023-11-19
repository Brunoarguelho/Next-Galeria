/*código javascript que vai permitir filtra as foto na barra de pesquisa */

let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container-image .image");

/* searchBox.addEventListener('input', () => {  primeiro codigo tava dando bug
    let value = searchBox.value;
    images.forEach((image) => {
        image.style.display = "none";
        let title = image.getAttribute("data-title");
        if (value == title) {
            image.style.display = "block";
        }
        if (searchBox.value == "") {
            image.style.display = "block";
        }
    });
}); */

searchBox.addEventListener('input', () => {
    let value = searchBox.value.toLowerCase();
    images.forEach((image) => {
        let title = image.getAttribute("data-title").toLowerCase();
        if (value == title) {
            image.style.display = "block";
            image.classList.add('image-displayed');
        } else {
            image.style.display = "none";
            image.classList.remove('image-displayed');
        }
        if (searchBox.value == "") {
            image.style.display = "block";
            image.classList.remove('image-displayed');
        }
    });
}); 






