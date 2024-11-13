document.addEventListener("DOMContentLoaded", function () {

    // --- Gestion du Loader Canvas ---
    function waitForPageLoadAndDelay(delay) {
        return new Promise((resolve) => {
            window.onload = () => {
                setTimeout(() => {
                    resolve();
                }, delay);
            };
        });
    }

    // Utilisation de la fonction
    const LoaderDelay = 4500; // 4.5 secondes d'affichage du loader

    waitForPageLoadAndDelay(LoaderDelay).then(() => {
        const loader = document.getElementById("canvas"); // Canvas du loader

        // Suppression du loader et activation du canvas de la Mustang
        if (loader) {
            loader.remove(); // Supprime complètement le loader du DOM
        }

        document.body.style.overflow = "auto"; // Réactive le défilement

        // Afficher le canvas de la Mustang après suppression du loader

        // --Animation translate--
        const observer_elements = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show_aperçu");
                }
            });
        }, { threshold: 0.2 });

        const animTranslate = document.querySelectorAll(".animTranslateLeft, .animTranslateRight, .animTranslateBottom, .animTranslateTop")
        animTranslate.forEach((el) => observer_elements.observe(el));
    });

});