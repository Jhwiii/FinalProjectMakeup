//movimiento de imagenes

document.addEventListener("DOMContentLoaded", function () {
    
    const imagenes = [
        "newSeason.png",
        "betterPrices.png",
        "merryCristhmas.png",
        "newCollection.png"
    ];
    const imagenTemporada = document.getElementById("imagen-temporada");
    let indice = 0;

  
    function cambiarImagen() {
        indice = (indice + 1) % imagenes.length; 
        imagenTemporada.src = imagenes[indice];  
    }

    setInterval(cambiarImagen, 5000);


    const btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", function () {
        indice = (indice - 1 + imagenes.length) % imagenes.length; 
        imagenTemporada.src = imagenes[indice]; 
    });

  
    const btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", function () {
        cambiarImagen(); 
    });
});


document.querySelectorAll('.btn-carrito').forEach(button => {
    button.addEventListener('click', () => {
  
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            image: button.dataset.image,
            quantity: 1 
        };

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


        const index = carrito.findIndex(item => item.id === product.id);
        if (index !== -1) {
 
            carrito[index].quantity += 1;
        } else {

            carrito.push(product);
        }

 
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${product.name} se añadió al carrito.`);
    });
});


    // Validación del formulario
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = document.querySelector("button[type='submit']");
    const form = document.getElementById("contact-form");


    function checkFormFields() {
        if (
            nameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            messageInput.value.trim() !== ""
        ) {
            submitButton.disabled = false; 
        } else {
            submitButton.disabled = true;
        }
    }

    submitButton.disabled = true;

    nameInput.addEventListener("input", checkFormFields);
    emailInput.addEventListener("input", checkFormFields);
    messageInput.addEventListener("input", checkFormFields);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado correctamente");
        form.reset();
        submitButton.disabled = true;
    });

 //boton para subir
    const btnArriba = document.getElementById("btn-arriba");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    btnArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
