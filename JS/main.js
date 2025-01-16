const coding = [
    {
        "src": "images/compétences/html.webp",
        "alt": "Logo HTML",
        "skill": "HTML",
    },
    {
        "src": "images/compétences/css-3.svg",
        "alt": "Logo CSS",
        "skill": "CSS",
    },
    {
        "src": "images/compétences/sass-logo.webp",
        "alt": "Logo Sass",
        "skill": "Sass",
    },
    {
        "src": "images/compétences/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.webp",
        "alt": "Logo Javascript",
        "skill": "JavaScript",
    },
    {
        "src": "images/compétences/php-logo.webp",
        "alt": "Logo PHP",
        "skill": "PHP",
    },
    {
        "src": "images/compétences/mysql-logo.webp",
        "alt": "Logo MySQL",
        "skill": "MySQL",
    },
    {
        "src": "images/compétences/threeJS.webp",
        "alt": "Logo Three.js",
        "skill": "Three.js",
    },
    {
        "src": "images/compétences/git-logo.webp",
        "alt": "Logo Git",
        "skill": "Git",
    },
    {
        "src": "images/compétences/node-js-logo.webp",
        "alt": "Logo Node.js",
        "skill": "Node.js",
    },
    {
        "src": "images/compétences/express-js.webp",
        "alt": "Logo Express.js",
        "skill": "Express.js",
    },
    {
        "src": "images/compétences/markdown.svg",
        "alt": "Logo Markdown",
        "skill": "Markdown",
    },
    {
        "src": "images/compétences/python.webp",
        "alt": "Logo Python",
        "skill": "Python",
    }
]
const design = [
    {
        "src": "images/compétences/blender.webp",
        "alt": "Logo Blender",
        "skill": "Blender",
    },
    {
        "src": "images/compétences/photoshop-logo.webp",
        "alt": "Logo Photoshop",
        "skill": "Photoshop",
    },
    {
        "src": "images/compétences/Adobe_Illustrator_CC_icon.svg.webp",
        "alt": "Logo Illustrator",
        "skill": "Illustrator",
    },
    {
        "src": "images/compétences/Adobe_Premiere_Pro_CC_icon.svg.webp",
        "alt": "Logo Premiere Pro",
        "skill": "Premiere Pro",
    },
    {
        "src": "images/compétences/Figma-logo.svg.webp",
        "alt": "Logo Figma",
        "skill": "Figma",
    }
]

const CMS = [
    {
        "src": "images/compétences/wordpress-logo.webp",
        "alt": "Logo WordPress",
        "skill": "WordPress",
    },
    {
        "src": "images/compétences/elementor-logo.webp",
        "alt": "Logo Elementor",
        "skill": "Elementor",
    }
]

document.addEventListener("DOMContentLoaded", function () {
    const divLeft_nav = document.getElementById("divLeft_nav");
    const btnTop = document.getElementById("btnTop")
    const canvasLoader = document.getElementById("canvas");
    const loader = document.getElementById("canvas");

    window.onscroll = function () { scrollToTopBtn() };
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

    // --- Gestion de l'effet 3D Projets Circulaire ---
    const banner = document.querySelector('.banner');
    const images = document.querySelectorAll('.all_item a');
    const slider = document.querySelector('.slider');


    if (banner) {
        images.forEach((img) => {
            const paragraph = img.parentElement.querySelector('p');

            img.addEventListener('mouseenter', () => {
                paragraph.style.opacity = '1';
                slider.style.animationPlayState = 'paused';
            });

            img.addEventListener('mouseleave', () => {
                paragraph.style.opacity = '0';
                slider.style.animationPlayState = 'running';
            });
        });
    }

    // --- Gestion du Loader - Hors page d'accueil ---

    if (!loader) {
        document.body.style.overflow = "auto";

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
    }
    const Mustang3D = document.getElementById("mustang");
    const QuantixH3D = document.getElementById("quantixH3D")
    const Champis = document.getElementById("champis")

    if (Mustang3D) {
        Mustang3D.style.display = "block"; // Affiche le canvas de la Mustang

        const active_Mustang3D = document.getElementById('active_Mustang3D');
        active_Mustang3D.addEventListener("click", function () {
            const mustangScript = document.createElement("script");
            mustangScript.src = "JS/Mustang3D.js";
            mustangScript.type = "module";
            document.body.appendChild(mustangScript);
            active_Mustang3D.remove();
        });
    }

    if (QuantixH3D) {
        QuantixH3D.style.display = "block"; // Affiche le canvas de la Mustang

        const active_QuantixH3D = document.getElementById('active_QuantixH3D');
        active_QuantixH3D.addEventListener("click", function () {
            const quantixScript = document.createElement("script");
            quantixScript.src = "JS/QuantixH3D.js";
            quantixScript.type = "module";
            document.body.appendChild(quantixScript);
            active_QuantixH3D.remove();
        });
    }

    if (Champis) {
        Champis.style.display = "block"; // Affiche le canvas de la Mustang

        const active_Champis3D = document.getElementById('active_Champis3D');
        active_Champis3D.addEventListener("click", function () {
            const champisScript = document.createElement("script");
            champisScript.src = "JS/champis.js";
            champisScript.type = "module";
            document.body.appendChild(champisScript);
            active_Champis3D.remove();
        });
    }

    // --- Gestion de la Nav ---
    const container_links = document.querySelectorAll("li.container_links > div > .nav_links");
    const MenuBurger_enable = document.getElementById("MenuBurger_enable");
    const ol = document.querySelector("header nav ol");

    container_links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Empêche le comportement par défaut du lien

            let ul_links = this.closest("li.container_links").querySelector("ul");
            let icon = this.closest("div").querySelector("ion-icon:last-of-type");

            if (ul_links) {
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
            divLeft_nav.style.transform = "translateX(0%)";
            MenuBurger_enable.setAttribute("name", "close");
            divLeft_nav.style.boxShadow = "auto"
        } else {
            divLeft_nav.style.transform = "translateX(-100%)";
            MenuBurger_enable.setAttribute("name", "menu");

            setTimeout(function () {
                ol.style.display = "none";
            }, 300);
            divLeft_nav.style.boxShadow = "none"
        }
    });

    // --- Gestion Arrow Up ---
    function scrollToTopBtn() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTop.style.opacity = '1';
        } else {
            btnTop.style.opacity = "0";
        }
    }

    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // --- Gestion Clear Form ---
    window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }

    // --- Gestion des Iframes ---
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

    // --- Gestion Animation Vague Text --- 
    const texts_toAnim = document.querySelectorAll(".vague");

    texts_toAnim.forEach(textElement => {
        const text = textElement.textContent.trim();
        textElement.innerHTML = "";

        const fontSize = window.getComputedStyle(textElement).fontSize;

        // Séparation par mot en gardant les espaces consécutifs
        const words = text.split(/(\s+)/); // Inclut les espaces dans le tableau

        words.forEach((word, wordIndex) => {
            if (word.trim() === "") {
                textElement.appendChild(document.createTextNode(" "));
                return;
            }

            const wordSpan = document.createElement("span");
            wordSpan.className = "antiwrap";

            // Ajout de chaque lettre dans le <span>
            word.split("").forEach((letter, letterIndex) => {
                const span = document.createElement("span");
                span.innerHTML = letter;
                span.style.animation = `colorChange 5s ease-in-out infinite`;
                span.style.animationDelay = `${(wordIndex + letterIndex) * 0.1}s`;
                span.style.fontSize = fontSize;
                wordSpan.appendChild(span);
            });

            textElement.appendChild(wordSpan);
        });

        // Boucle d'animation toutes les 1.5 secondes pour chaque élément
        setInterval(() => {
            textElement.querySelectorAll(".antiwrap span").forEach((span, index) => {
                span.style.animationDelay = `${index * 0.1}s`;
            });
        }, 1000);
    });

    // skills
    const skills_cards = document.getElementById("skills_cards");

    function create_cards(tab_skills) {
        tab_skills.forEach(tab_skill => {
            let cards = document.createElement("li");
            cards.className = "cards";

            let img_cards = document.createElement("img");
            img_cards.src = tab_skill.src;
            img_cards.alt = tab_skill.alt;
            cards.appendChild(img_cards);

            let skillName = tab_skill.skill; // `skill` is a single string
            let name = document.createElement("h4");
            name.textContent = skillName;
            name.className = "tags_cards";

            switch (skillName) {
                case "HTML":
                    name.style.color = "#E54C21";
                    break;
                case "CSS":
                    name.style.color = "#1B73BA";
                    break;
                case "Sass":
                    name.style.color = "#CD6799";
                    break;
                case "JavaScript":
                    name.style.color = "#D4B830";
                    break;
                case "PHP":
                    name.style.color = "#6C7AA8";
                    break;
                case "MySQL":
                    name.style.color = "#00758F";
                    break;
                case "Three.js":
                    name.style.color = "black";
                    break;
                case "Git":
                    name.style.color = "#E0672D";
                    break;
                case "Node.js":
                    name.style.color = "#3F873F";
                    break;
                case "Express.js":
                    name.style.color = "#323232";
                    break;
                case "Markdown":
                    name.style.color = "black";
                    break;
                case "Python":
                    name.style.color = "#3774A8";
                    break;
                case "Blender":
                    name.style.color = "#EB7700";
                    break;
                case "Photoshop":
                    name.style.color = "#001E36";
                    break;
                case "Illustrator":
                    name.style.color = "#300000";
                    break;
                case "Premiere Pro":
                    name.style.color = "#220049";
                    break;
                case "Figma":
                    name.style.color = "black";
                    break;
                case "WordPress":
                    name.style.color = "#21759B";
                    break;
                case "Elementor":
                    name.style.color = "#7F2E40";
                    break;
            }
            cards.appendChild(name);
            skills_cards.appendChild(cards)
        });
    };

    create_cards(coding);
    create_cards(design);
    create_cards(CMS);
});