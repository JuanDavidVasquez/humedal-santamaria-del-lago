document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("visible");
        menu.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section"); 
    
    const observerOptions = {
        root: null, // Usa el viewport como referencia.
        rootMargin: "0px", // No aplica márgenes externos.
        threshold: 0.2, // Se activa cuando el 20% de la sección es visible.
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const section = entry.target;

            if (entry.isIntersecting) {
                // Aplica la animación al entrar
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            } else {
                // Vuelve a los estilos iniciales cuando la sección ya no es visible
                section.style.opacity = "0";
                section.style.transform = "translateY(50px)";
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // Estilos iniciales de cada sección
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        // Empieza a observar
        sectionObserver.observe(section);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los elementos de imagen
    const images = document.querySelectorAll(".fauna-img");
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    // Mostrar el modal cuando se hace clic en una imagen
    images.forEach(image => {
        image.addEventListener("click", (e) => {
            modal.style.display = "block";
            modalImage.src = e.target.src; // Establece la imagen dentro del modal
        });
    });

    // Cerrar el modal cuando se hace clic en la "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal si el usuario hace clic fuera de la imagen
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
