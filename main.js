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