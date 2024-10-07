document.addEventListener("DOMContentLoaded", function () {
    const container_links = document.querySelectorAll("li.container_links > div > .nav_links");
    const MenuBurger_enable = document.getElementById("MenuBurger_enable");
    const ol = document.querySelector("header nav ol");
    const divLeft_nav = document.getElementById("divLeft_nav");
    const btnTop = document.getElementById("btnTop")
    const canvasLoader = document.getElementById("canvas"); 

    window.onscroll = function () { checkNavbar(), scrollToTopBtn() };

    // --- Gestion du Loader Canvas ---
    // function waitForPageLoadAndDelay(delay) {
    //     return new Promise((resolve) => {
    //         window.onload = () => {
    //             setTimeout(() => {
    //                 resolve();
    //             }, delay);
    //         };
    //     });
    // }
    
    // // Utilisation de la fonction
    // const LoaderDelay = 6000;
    
    // waitForPageLoadAndDelay(LoaderDelay)
    //     .then(() => {
    //         const loader = document.getElementById("canvas"); // L'élément du loader
    //         const body = document.body;
    
    //         // Suppression du loader et réactivation du défilement
    //         if (loader) {
    //             loader.remove(); // Supprime complètement le loader du DOM
    //         }
    //         body.style.overflow = "auto"; // Réactive le défilement
    //     });

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
const LoaderDelay = 6000; // 6 secondes d'affichage du loader

waitForPageLoadAndDelay(LoaderDelay).then(() => {
    const loader = document.getElementById("canvas"); // Canvas du loader
    const body = document.body;

    // Suppression du loader et activation du canvas de la Mustang
    if (loader) {
        loader.remove(); // Supprime complètement le loader du DOM
    }

    body.style.overflow = "auto"; // Réactive le défilement

    // Afficher le canvas de la Mustang après suppression du loader
    // const Mustang3D = document.getElementById("mustang");
    // if (Mustang3D) {
    //     Mustang3D.style.display = "block"; // Affiche le canvas de la Mustang
    // }
    
    // // Charger le script pour la Mustang après suppression du loader
    // const mustangScript = document.createElement("script");
    // mustangScript.src = "./JS/Mustang3D.js";
    // mustangScript.type = "module";
    // document.body.appendChild(mustangScript);
});


    // --- Gestion de la Nav ---
    container_links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Empêche le comportement par défaut du lien

            // Trouve le <ul> associé
            let ul_links = this.closest("li.container_links").querySelector("ul");
            // Trouve l'icône dans le même <div> que le lien cliqué
            let icon = this.closest("div").querySelector("ion-icon:last-of-type");

            if (ul_links) {
                // Bascule l'affichage du <ul> et l'icône
                if (ul_links.style.display === "none" || ul_links.style.display === "") {
                    ul_links.style.display = "flex";
                    if (this.matches("p")) {
                        this.style.color = "var(--new_color_orange)";
                        icon.style.color = "var(--new_color_orange)";
                    }
                    icon.setAttribute("name", "chevron-down-outline");
                } else {
                    ul_links.style.display = "none";
                    if (this.matches("p")) {
                        this.style.color = "white";
                        icon.style.color = "white";
                    }
                    icon.setAttribute("name", "chevron-forward-outline");
                }
            }
        });
    });


    MenuBurger_enable.addEventListener("click", function () {

        if (ol.style.display === "none" || ol.style.display === "") {
            ol.style.display = "flex";
            divLeft_nav.style.transform = "translateX(0%)"; // Ramène le menu sur l'écran
            MenuBurger_enable.setAttribute("name", "close");
        } else {
            divLeft_nav.style.transform = "translateX(-100%)"; // Cache le menu hors écran
            MenuBurger_enable.setAttribute("name", "menu");

            // Optionnel : Attends que l'animation soit terminée avant de cacher l'élément
            setTimeout(function () {
                ol.style.display = "none";
            }, 300); // Le délai doit correspondre à la durée de la transition
        }
    });

    // --- Div sticky ---
    const div_sticky = document.getElementById("div_sticky");

    function checkNavbar() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            div_sticky.style.display = "flex";
        } else {
            div_sticky.style.display = "none";
        }
    };


    // --- Arrow Up ---
    function scrollToTopBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.style.opacity = '1';
        } else {
            btnTop.style.opacity = "0";
        }
    }

    // --- Gestion des iframes ---
    const iframes = document.querySelectorAll(".iframes_container");
    const btn_iframes_open = document.querySelectorAll(".btn_iframes_open");
    const btn_iframes_close = document.querySelectorAll(".btn_iframes_close");

    btn_iframes_open.forEach((btn) => {
        btn.addEventListener("click", function () {
            iframes.forEach((iframe) => {
                iframe.style.overflow = 'auto';
                iframe.style.pointerEvents = "all";
                iframe.setAttribute("scrolling", "yes");
            });

            iframes.forEach((div) => {
                div.style.filter = "none";
            });

            btn_iframes_open.forEach((btn) => {
                btn.style.display = "none";
            });

            btn_iframes_close.forEach((btn) => {
                btn.style.display = "block";
            });
        });
    });

    btn_iframes_close.forEach((btn) => {
        btn.addEventListener("click", function () {
            iframes.forEach((iframe) => {
                iframe.style.overflow = 'hidden';
                iframe.style.pointerEvents = "none";
                iframe.setAttribute("scrolling", "no");
            });

            iframes.forEach((div) => {
                div.style.filter = "blur(4px)";
            });

            btn_iframes_open.forEach((btn) => {
                btn.style.display = "block";
            });

            btn_iframes_close.forEach((btn) => {
                btn.style.display = "none";
            });
        });
    });

});