const my_projects = [
    {
        "description": "Un site web vitrine avec back office intégré, permettant aux admins de se connecter afin de modifier chaque images, textes et liens sur le site web.",
        "url": "lacissoniere",
        "src": "images/lacissoniere/lacissoniere.webp",
        "alt": "Page d'accueil La Cissonière",
        "title": "La Cissonière",
        "title2": "Boucherie-Charcuterie-Artisanale",
        "tags": ["HTML", "CSS", "JS", "PHP"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/lacissoniere"
    },
    {
        "description": "Développement d'un site web pour une entreprise fictive proposant l'installation de colonies humaines sur une planète habitable, incluant une page d'inscription fictive. J'ai assuré la conception et l'intégration du site dans un délai restreint.",
        "url": "quantix-horizon",
        "src": "images/Quantix_Horizon.webp",
        "alt": "Page d'accueil Quantix Horizon",
        "title": "Quantix Horizon",
        "title2": "Projet de Partiel",
        "tags": ["HTML", "CSS", "JS", "PHP"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/Quantix_Horizon"
    },
    {
        "description": "Conception d'un site web fictif avec un scroll horizontal sur Desktop.",
        "url": "chocospace",
        "src": "images/ChocoSpace_img.webp",
        "alt": "Page d'accueil ChocoSpace",
        "title": "ChocoSpace",
        "title2": "Site web horizontal, Prototype",
        "tags": ["HTML", "CSS", "JS"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/ChocoSpace"
    },
    {
        "description": "Proposition d'une landing page à La Montagne Enchantée.",
        "url": "montagneLandingPage",
        "src": "images/landing_page_MontEnchant.webp",
        "alt": "Landing Page La Montagne Enchantée",
        "title": "La Montagne Enchantée",
        "title2": "Landing Page",
        "tags": ["HTML", "CSS"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/landing-page-LME"
    },
    {
        "description": "Site web conçu en markdown, il a pour but d'informer sur le mode de jeu Skyblock de Minecraft.",
        "url": "Wiki-MC-SB ",
        "src": "images/siteweb_Minecraft_img.webp",
        "alt": "Page d'accueil site web minecraft",
        "title": "Wiki Minecraft Skyblock",
        "title2": "Projet Scolaire - Lycée",
        "tags": ["Markdown"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/minecraft-skyblock"
    },
    {
        "description": "Ce projet est en réalité un jeu conçu par un groupe de 4 personnes. Ce projet final bonus de fin d'année, n'a pu être finie à temps en classe de Terminale en spécialité NSI (Numérique-Science-Informatique).",
        "url": "pygame-tiled ",
        "src": "images/pygame/map_final_pygame_jeu_bateau-683x1024.webp",
        "alt": "Carte du jeu",
        "title": "À Bon Port",
        "title2": "Projet Scolaire - Lycée",
        "tags": ["Python"]
    },
    {
        "description": "Pendant environ deux mois, j'ai travaillé à la création d'un fond d'écran animé en 3D d'une Ford Mustang GT.",
        "url": "mustang ",
        "src": "images/test1_mustang_img.webp",
        "alt": "Image fond d'écran Mustang GT",
        "title": "Fond d'écran 3D",
        "title2": "Mustang GT animé",
        "tags": ["Blender"]
    },
    {
        "description": "En lien avec le projet \"La Montagne Enchantée\", nous devions créer quelque chose qui permettrait aux enfants de découvrir la montagne sans y être allés. J'ai donc créé un modèle 3D pour l'illustrer.",
        "url": "montagne3D ",
        "src": "images/montagneEnchantée3D.webp",
        "alt": "Image modèle 3D La Montagne Enchantée",
        "title": "La Montagne Enchantée",
        "title2": "Modèle 3D",
        "tags": ["Blender"]
    },
    {
        "description": "En lien avec le projet \"Quantix Horizon\", j'ai créé un modèle 3D pour illustrer la maison futuriste/bunker.",
        "url": "quantixH3D ",
        "src": "images/quantix3D.webp",
        "alt": "Image modèle 3D Quantix Horizon",
        "title": "Quantix Horizon",
        "title2": "Modèle 3D",
        "tags": ["Blender"]
    },
    {
        "description": "J'ai créé une modélisation de paysage 3D de manière procédural.",
        "url": "champis ",
        "src": "images/fond_écran_procédural.webp",
        "alt": "Fond d'écran 3D procédural",
        "title": "Fond d'écran 3D procédural",
        "title2": "Projet personnel",
        "tags": ["Blender"]
    },
    {
        "description": "Nous avons procédée à une proposition de refonte du site web du Lycée Edouard Herriot",
        "url": "Wordpress ",
        "src": "images/Wordpress/lycée_accueil_1.webp",
        "alt": "Page d'accueil Lycée Edouard Herriot",
        "title": "Lycée Edouard Herriot",
        "title2": "Projet de Partiel",
        "tags": ["WordPress"]
    },
    {
        "description": "Je suis en train de réalisé un fond d'écran animé en 3D d'une Ferrari Portofino.",
        "url": "",
        "src": "images/ferrari.png",
        "alt": "Fond d'écran Ferrari Portofino",
        "title": "Fond d'écran 3D",
        "title2": "Ferrari Portofino animé",
        "tags": ["In-Progress"]
        // "tags": ["Blender"]
    },
    {
        "description": "Association culturelle et cultuelle chrétienne",
        "url": "",
        "src": "images/graceetgloire.png",
        "alt": "Page d'accueil Grace & Gloire",
        "title": "Grace & Gloire",
        "title2": "Site web vitrine",
        "tags": ["In-Progress"]
        // "tags": ["HTML", "CSS", "JS", "PHP"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/postal_World.webp",
        "alt": "Affiche The Postal World",
        "title": "The Postal World",
        "title2": "Affiche Publicitaire - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/Adobe_Suite/Photoshop/Exercice_2_magazine_archi_Timothee_VDB_B1_A-scaled-1.webp",
        "alt": "Affiche Rotterdam Photoshop",
        "title": "Rotterdam",
        "title2": "Affiche Architecture - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/jeuxDeCartes.webp",
        "alt": "Création d'un jeux de cartes - Merveilles du monde",
        "title": "Jeux de cartes",
        "title2": "Antique & Moderne - Projet Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/Adobe_Suite/Photoshop/Pub_Eau_1-scaled-1-724x1024.webp",
        "alt": "Publicité sur l'eau Photoshop",
        "title": "L'Eau",
        "title2": "Affiche Publicitaire - Personnel",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/Adobe_Suite/Photoshop/Affiche_chat_gpt_Timothee_VDB_B1_A-1-724x1024.webp",
        "alt": "Affiche constructivisme Photoshop",
        "title": "ChatGPT",
        "title2": "Affiche Constructivisme - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/Photoshop/Exercice_3_pub_touristique_Timothee_VDB_B1_A-1024x576.webp",
        "alt": "Affiche publicitaire Avignon",
        "title": "Le Palais des Papes",
        "title2": "Affiche Publicitaire - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/Photoshop/Moodboard_City_Commerce-scaled-1-1024x724.webp",
        "alt": "MoodBoard",
        "title": "MoodBoard",
        "title2": "Projet Maquettage - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/Photoshop/Inesis-scaled-1-1024x724.webp",
        "alt": "Inesis - Décathlon",
        "title": "Inesis - Décathlon",
        "title2": "Design Y2K - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/Adobe_Suite/Illustrator/keyvisual_Portrait.webp",
        "alt": "Affiche Star Wars Outlaws 1",
        "title": "Keyvisual 1",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/Adobe_Suite/Illustrator/Affiche-04.webp",
        "alt": "Affiche Star Wars Outlaws 2",
        "title": "Keyvisual 2",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "position": "top",
        "src": "images/Adobe_Suite/Illustrator/Affiche-03.webp",
        "alt": "Affiche Star Wars Outlaws 3",
        "title": "Keyvisual 3",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"],
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/Illustrator/Keyvisual_paysage.webp",
        "alt": "Affiche Star Wars Outlaws 4",
        "title": "Keyvisual 4",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "src": "images/Adobe_Suite/Illustrator/Goodies_dark_avecFond.webp",
        "alt": "Goodies Dark Star Wars Outlaws",
        "title": "Goodies Dark",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "src": "images/Adobe_Suite/Illustrator/Goodies_light_avecFond.webp",
        "alt": "Goodies Light Star Wars Outlaws",
        "title": "Goodies Light",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "portrait",
        "src": "images/Adobe_Suite/Illustrator/Bannière-StarWars-Outlaws.webp",
        "alt": "Bannière Star Wars Outlaws",
        "title": "Bannière",
        "title2": "Star Wars Outlaws - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/Illustrator/Logo-Tiktok_amélioré_Plan-de-travail-1.webp",
        "alt": "Projet Tiktok",
        "title": "Projet TikTok",
        "title2": "Projet Personnel",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/Illustrator/Plakatstil_Timothee_VDB_B1_A-768x543.webp",
        "alt": "Affiche Poster Allemand",
        "title": "Loco Goods",
        "title2": "Poster allemand \"Plakatstil\" - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/XD/XD_maquettage.webp",
        "alt": "Réalisation XD Site Web Sport",
        "title": "Maquette Site Sport",
        "title2": "Projet Maquettage - Scolaire",
        "tags": ["Design"]
    },
    {
        "url": "adobe ",
        "forme": "paysage",
        "src": "images/Adobe_Suite/XD/XD_Site_touristique_dev_front.webp",
        "alt": "Réalisation XD Site Web Touristique",
        "title": "Maquette Site Touristique",
        "title2": "Projet Maquettage - Scolaire",
        "tags": ["Design"]
    },
]

const my_projects_actu = [
    {
        "description": "Un site web vitrine avec back office intégré, permettant aux admins de se connecter à un login et ensuite modifier chaque images, textes et liens sur le site web.",
        "url": "lacissoniere ",
        "src": "images/lacissoniere/lacissoniere.webp",
        "alt": "Page d'accueil La Cissonière",
        "title": "La Cissonière",
        "title2": "Boucherie-Charcuterie-Artisanale",
        "tags": ["HTML", "CSS", "JS", "PHP"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/lacissoniere"
    },
    {
        "description": "Développement d'un site web pour une entreprise fictive proposant l'installation de colonies humaines sur une planète habitable, incluant une page d'inscription fictive. J'ai assuré la conception et l'intégration du site dans un délai restreint.",
        "url": "quantix-horizon ",
        "src": "images/Quantix_Horizon.webp",
        "alt": "Page d'accueil Quantix Horizon",
        "title": "Quantix Horizon",
        "title2": "Projet de Partiel",
        "tags": ["HTML", "CSS", "JS", "PHP"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/Quantix_Horizon"
    },
    {
        "description": "Pendant environ deux mois, j'ai travaillé à la création d'un fond d'écran animé en 3D d'une Ford Mustang GT.",
        "url": "mustang ",
        "src": "images/test1_mustang_img.webp",
        "alt": "Image fond d'écran Mustang GT",
        "title": "Fond d'écran 3D",
        "title2": "Mustang GT animé",
        "tags": ["Blender"]
    },
]

const my_projects_actu_tel = [
    {
        "description": "Un site web vitrine avec back office intégré, permettant aux admins de se connecter à un login et ensuite modifier chaque images, textes et liens sur le site web.",
        "url": "lacissoniere ",
        "src": "images/lacissoniere/lacissoniere.webp",
        "alt": "Page d'accueil La Cissonière",
        "title": "La Cissonière",
        "title2": "Boucherie-Charcuterie-Artisanale",
        "tags": ["HTML", "CSS", "JS", "PHP"],
        "urlGitHub": "https://github.com/Timothee-VanDenBosch/lacissoniere"
    },
    {
        "description": "Ce projet est en réalité un jeu conçu par un groupe de 4 personnes. Ce projet final bonus de fin d'année, n'a pu être finie à temps en classe de Terminale en spécialité NSI (Numérique-Science-Informatique).",
        "url": "pygame-tiled ",
        "src": "images/pygame/map_final_pygame_jeu_bateau-683x1024.webp",
        "alt": "Carte du jeu",
        "title": "À Bon Port",
        "title2": "Projet Scolaire - Lycée",
        "tags": ["Python"]
    },
    {
        "description": "Pendant environ deux mois, j'ai travaillé à la création d'un fond d'écran animé en 3D d'une Ford Mustang GT.",
        "url": "mustang ",
        "src": "images/test1_mustang_img.webp",
        "alt": "Image fond d'écran Mustang GT",
        "title": "Fond d'écran 3D",
        "title2": "Mustang GT animé",
        "tags": ["Blender"]
    },
]
console.log(my_projects, my_projects_actu, my_projects_actu_tel);
document.addEventListener("DOMContentLoaded", () => {
    const filter_cards = document.getElementById("filter_cards");
    const tags_input = document.querySelectorAll(".input_filter_tags");
    const all_input = document.getElementById("input_filter_all");
    let displayAll = null;
    let checked = new Set();

    //Configuration hors hébergement GitHub
    // const currentPage = window.location.pathname;
    
    // if (window.matchMedia("(max-width: 1300px)").matches) {
    //     currentPage.endsWith('projects') ? create_cards(my_projects) : create_cards(my_projects_actu_tel);
    // } else {
    //     currentPage.endsWith('projects') ? create_cards(my_projects) : create_cards(my_projects_actu);
    // }

    // Récupère le slug sans extension ni slash final
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    const currentSlug = pathSegments[pathSegments.length - 1] || "index"; // Par défaut, "index" si le chemin est vide

    // Ajustement des projets en fonction de l'écran et du slug
    if (window.matchMedia("(max-width: 1300px)").matches) {
        currentSlug === 'projects' ? create_cards(my_projects) : create_cards(my_projects_actu_tel);
    } else {
        currentSlug === 'projects' ? create_cards(my_projects) : create_cards(my_projects_actu);
    }


    function create_cards(projects) {
        projects.forEach(project => {
            let cards = document.createElement("li");
            cards.className = "cards";

            let link = document.createElement("a");
            link.href = project.url;
            cards.appendChild(link);

            let img_cards = document.createElement("img");
            img_cards.src = project.src;
            img_cards.alt = project.alt;
            if (project.forme === "portrait") {
                // img_cards.style.aspectRatio = "9/16";
                img_cards.style.objectFit = "cover";
                img_cards.style.objectPosition = project.position;
            }
            if (project.forme === "paysage") {
                img_cards.style.objectFit = "fill";
            }
            link.appendChild(img_cards);

            let infos_cards = document.createElement("div");
            infos_cards.className = "infos_cards";
            cards.appendChild(infos_cards);

            let content = document.createElement("div");
            content.className = "content";
            infos_cards.appendChild(content);

            let title_cards = document.createElement("h2");
            title_cards.textContent = project.title;
            content.appendChild(title_cards);

            let title2_cards = document.createElement("h4");
            title2_cards.textContent = project.title2;
            title2_cards.style.marginBottom = 0;
            content.appendChild(title2_cards);

            let desc_cards = document.createElement("p");
            desc_cards.textContent = project.description;
            content.appendChild(desc_cards);

            let button = document.createElement("a");
            button.href = project.url;
            button.textContent = "Découvrir le Projet !";
            content.appendChild(button);

            let infos_tags = document.createElement("div");
            infos_tags.className = "infos_tags";
            infos_cards.appendChild(infos_tags);


            if (project.urlGitHub) {
                infos_tags.style.justifyContent = "space-between";

                let buttonGitHub = document.createElement("a");
                buttonGitHub.href = project.urlGitHub;
                buttonGitHub.target = "_blank";
                buttonGitHub.className = "buttonGitHub";
                infos_tags.appendChild(buttonGitHub);

                let github = document.createElement("ion-icon");
                github.setAttribute("name", "logo-github");
                buttonGitHub.appendChild(github);
            }

            let all_tags = document.createElement("div");
            all_tags.className = "all_tags";
            infos_tags.appendChild(all_tags);

            project.tags.forEach(tag => {
                let tag_cards = document.createElement("p");
                tag_cards.textContent = tag;
                tag_cards.className = "tags_cards";
                tag_cards.style.padding = "10px";
                tag_cards.style.borderRadius = "5px";

                switch (tag) {
                    case "HTML":
                        tag_cards.style.backgroundColor = "#E54C21";
                        break;
                    case "CSS":
                        tag_cards.style.backgroundColor = "#254BDE";
                        break;
                    case "JS":
                        tag_cards.style.backgroundColor = "#EFD81D";
                        tag_cards.style.color = "#1c1c1c";
                        break;
                    case "PHP":
                        tag_cards.style.backgroundColor = "#6C7AA8";
                        break;
                    case "Markdown":
                        tag_cards.style.backgroundColor = "black";
                        break;
                    case "Blender":
                        tag_cards.style.backgroundColor = "#EB7700";
                        break;
                    case "Design":
                        tag_cards.style.backgroundColor = "purple";
                        break;
                    case "WordPress":
                        tag_cards.style.backgroundColor = "#21759B";
                        break;
                    case "Python":
                        tag_cards.style.backgroundColor = "green";
                        break;
                    case "In-Progress":
                        tag_cards.style.backgroundColor = "gray";
                        break;
                }


                all_tags.appendChild(tag_cards);
            });

            filter_cards.appendChild(cards)
        });
        set_input();
    };

    if (all_input) {
        all_input.addEventListener("click", () => {
            document.querySelectorAll(".cards").forEach(card => {
                card.style.display = "block";
            });
            tags_input.forEach(tag_input => {
                let custom_button = tag_input.closest(".custom-button");
                custom_button.classList.remove("active_input");
                tag_input.checked = false
                checked.add(tag_input.value)
            });
        });
    }

    function set_input() {
        tags_input.forEach(tag_input => {
            tag_input.checked = false
            checked.add(tag_input.value)

            tag_input.addEventListener("change", () => {
                let custom_button = tag_input.closest(".custom-button");

                if (tag_input.checked) {
                    custom_button.classList.add("active_input");
                    checked.delete(tag_input.value);
                } else {
                    custom_button.classList.remove("active_input");
                    checked.add(tag_input.value);
                }
                check_tags();
                displayAll = true;
            });
        });
    };

    function check_tags() {

        document.querySelectorAll(".cards").forEach(card => {
            let tags_of_card = Array.from(card.querySelectorAll(".tags_cards")).map(tag => tag.textContent);
            let shouldDisplay = tags_of_card.every(tag => checked.has(tag));
            if (displayAll && checked.size === 10) {
                document.querySelectorAll(".cards").forEach(card => {
                    card.style.display = "block";
                });
                tags_input.forEach(tag_input => {
                    let custom_button = tag_input.closest(".custom-button");
                    custom_button.classList.remove("active_input");
                    tag_input.checked = false
                    checked.add(tag_input.value)
                });
            } else if (shouldDisplay) {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        });
    }
});