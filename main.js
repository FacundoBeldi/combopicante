    function changeImage() {
        const img = document.getElementById('banner-image');
        if (window.innerWidth <= 768) {
            img.src = './imgs/imagenTres-removebg-preview2.png'; // Cambia a la segunda imagen
        } else {
            img.src = './imgs/imagenTres-removebg-preview.png'; // Imagen original para pantallas grandes
        }
    }
    // Ejecuta la función al cargar la página
    window.onload = changeImage;
    // Ejecuta la función cada vez que cambie el tamaño de la ventana
    window.onresize = changeImage;


    // Obtener el modal
var modal = document.getElementById("imageModal");

// Obtener la imagen y el elemento modal donde la imagen se mostrará
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Todas las imágenes
var imgs = document.querySelectorAll(".gallery img");

// Iterar sobre todas las imágenes y añadir el evento de clic
imgs.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en <span> (la X), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}