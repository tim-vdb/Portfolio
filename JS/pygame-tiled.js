document.addEventListener("DOMContentLoaded", function () {

    //-------------Main Pygame/Tiled-------------------------
    const observer_pygame_vague1Et2 = new IntersectionObserver(function (entries) {
        // entries est un tableau d'objets IntersectionObserverEntry
        entries.forEach(entry => {
            // Vérifier si l'élément cible est en intersection avec le viewport
            if (entry.isIntersecting) {
                // Ajouter la classe "show_aperçu" à l'élément bateau_marchand
                Bateau_marchand.classList.add("show_aperçu");
                Bateau_pirate_1.classList.add("show_aperçu");
            } else {
                Bateau_marchand.classList.remove("show_aperçu");
                Bateau_pirate_1.classList.remove("show_aperçu");
            }
        });
    });

    const observer_pygame_vague3 = new IntersectionObserver(function (entries) {
        // entries est un tableau d'objets IntersectionObserverEntry
        entries.forEach(entry => {
            // Vérifier si l'élément cible est en intersection avec le viewport
            if (entry.isIntersecting) {
                Bateau_pirate_2.classList.add("show_aperçu");
                console.log('salut');
                maréeItems.forEach((item, index) => {
                    const itemDelay = totalDelay - index * stepSize;
                    observer_pygame_vague3.observe(item);
                    item.style.animationDelay = `${itemDelay}ms`; // ajustez la valeur pour le décalage
                    item.classList.add("show_aperçu");
                });
            } else {
                Bateau_pirate_2.classList.remove("show_aperçu");
                maréeItems.forEach((item, index) => {
                    const itemDelay = totalDelay - index * stepSize;
                    observer_pygame_vague3.observe(item);
                    item.style.animationDelay = `${itemDelay}ms`;
                    item.classList.remove("show_aperçu");
                });
            }
        });
    });

    // Sélection de l'élément à observer
    const Vague_2 = document.getElementById("vector_2");
    const Vague_3 = document.getElementById("vague_3");
    const Bateau_marchand = document.getElementById("bateau_marchand");
    const Bateau_pirate_1 = document.getElementById("bateau_pirate_1");
    const Bateau_pirate_2 = document.getElementById("bateau_pirate_2");
    const maréeItems = document.querySelectorAll('.vague');
    const delayStep = 200; // Valeur du délai entre chaque élément
    const totalItems = maréeItems.length;
    const totalDelay = delayStep * (totalItems - 1); // Total du délai pour tous les éléments sauf le dernier
    const lastItemDelay = 0; // Valeur du délai pour le dernier élément
    const stepSize = (totalDelay - lastItemDelay) / (totalItems - 1); // Taille du pas de délai

    observer_pygame_vague1Et2.observe(Vague_2);
    observer_pygame_vague3.observe(Vague_3);

    //----------------------Audio-------------------------------
    const monAudio = document.getElementById('musique_jeu');
    const button_audio = document.getElementById("button_audio");
    // Modifier le volume (de 0 à 1)

    button_audio.addEventListener("click", function () {
        monAudio.volume = 0.5; // Met le volume à 50%
        monAudio.play();
        monAudio.muted = false;

    });

});