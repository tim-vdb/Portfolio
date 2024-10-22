function rgbToHex(rgb) {
    return "#" + rgb.match(/\d+/g).map(function (part) {
        return ('0' + parseInt(part).toString(16)).slice(-2);
    }).join('');
}

document.addEventListener("DOMContentLoaded", function () {
    const H1 = document.querySelector("h1")
    const Presentation = document.getElementById("presentation")
    const Icon_dark_mode = document.getElementById("icon_dark-mode")
    const Header = document.querySelector("header")
    const Body = document.querySelector("body")
    const IconBtnLanguage = document.querySelector("ion-icon#language")
    const HeaderALinks = document.querySelectorAll("header a");
    const Small_button = document.getElementById("small")
    const Big_button = document.getElementById("big")
    const Div_language = document.getElementById("div_language");
    const BtnApply = document.getElementById("btn_apply")
    const A_Lang = document.querySelector("#div_language p")
    const Fr_lang = document.getElementById("fr_lang")
    const En_lang = document.getElementById("en_lang")
    const Main = document.querySelector("main")
    const navbar = document.querySelector("nav");
    const Content_main = document.querySelector("main div.content")
    const Icon_scroll_down = document.getElementById("scroll-long-down")
    

    let size_lang = 16
    let size_lang_previous = size_lang
    let mousedown_lang = false
    let escape = false

    // -------------------Header--------------------------
    // ------------------Dark-Mode------------------------------
    const beige_rgb = "rgb(232, 220, 202);";
    const marron_foncé_rgb = "rgb(27, 23, 20)";
    // const beige_hex = rgbToHex(beige_rgb);
    // const marron_foncé_hex = rgbToHex(marron_foncé_rgb);
    // const ion_icon = document.querySelector("ion-icon, ion-icon#icon_dark-mode, ion-icon#language")
    // const Header_nav_a_hover = document.querySelector("header nav a:hover")
    // const Presentation_div_h1 = document.querySelector("#presentation_div h1")
    // const Presentation_after = document.querySelector("#presentation::after")

    Icon_dark_mode.addEventListener("click", function () {
        if (Icon_dark_mode.name == "sunny-outline") {
            Icon_dark_mode.name = "moon-outline"
            localStorage.setItem("icon_dark_mode", "moon-outline");
            // localStorage.setItem("color_dark_mode", beige_hex);
            // changeSrcLightMode()
        } else {
            Icon_dark_mode.name = "sunny-outline"
            localStorage.setItem("icon_dark_mode", "sunny-outline");
            // localStorage.setItem("color_dark_mode", marron_foncé_hex);
            // changeSrcDarkMode()
        }
        Body.classList.toggle("dark-mode");
        Header.classList.toggle("dark-mode");
        HeaderALinks.forEach(link => {
            link.classList.toggle("dark-mode");
        });
    });

    // function changeSrcLightMode() {
    //     Tiled.src = "images/Tiled_beige.svg"
    //     Pygame.src = "images/pygame_beige.svg"

    // }

    // function changeSrcDarkMode() {
    //     Tiled.src = "images/Tiled.svg"
    //     Pygame.src = "images/pygame.svg"
    // }

    // ------------------Storage Dark-Mode-----------------------
    if (!localStorage.getItem("icon_dark_mode")) {
        localStorage.setItem("icon_dark_mode", "sunny-outline");
        // localStorage.setItem("color_dark_mode", marron_foncé_hex);
    } else {
        setStyles_Dark_Mode();
    }

    // //Appel de la fonction setStyles_Dark_Mode pour le localStorage
    function setStyles_Dark_Mode() {
        let favorite_icon_dark_mode = localStorage.getItem("icon_dark_mode");
        //     let favorite_color_dark_mode = localStorage.getItem("color_dark_mode");
        Icon_dark_mode.name = favorite_icon_dark_mode
        //     ion_icon.style.color = favorite_color_dark_mode
        //     Body.style.color = favorite_color_dark_mode
        //     Header.style.backgroundColor = favorite_color_dark_mode
        //     Header.style.color = favorite_color_dark_mode
        //     Header_nav_a.style.color = favorite_color_dark_mode
        //     Header_nav_a.style.textShadow = favorite_color_dark_mode
        //     // Header_nav_a_hover.style.color = favorite_color_dark_mode
        //     // Header_nav_a_hover.style.borderColor = favorite_color_dark_mode
        //     // Header_nav_a_hover.style.backgroundColor = favorite_color_dark_mode
        //     // Header_nav_a_hover.style.boxShadow = favorite_color_dark_mode
        //     Presentation.style.color = favorite_color_dark_mode
        //     Presentation.style.borderColor = favorite_color_dark_mode
        //     //à vérifier
        //     Presentation_div_h1.style.textShadow = "none";
        //     // Presentation_after.style.color = favorite_color_dark_mode
        //     // Presentation_after.style.borderTop = favorite_color_dark_mode
    }

    // -------------------------Fonts---------------------------

    //Appel de la fonction setStyles_Fonts pour le localStorage
    function setStyles_Fonts() {
        let favorite_font = localStorage.getItem("font");
        const size_lang_str_fav = favorite_font.toString() + "px";
        A_Lang.style.fontSize = size_lang_str_fav;
        Fr_lang.style.fontSize = size_lang_str_fav;
        En_lang.style.fontSize = size_lang_str_fav;
        Main.style.fontSize = size_lang_str_fav;
    }

    IconBtnLanguage.addEventListener("click", interfaceLanguage);

    function interfaceLanguage() {
        //Rend visible l'interface settings de font
        Div_language.classList.remove("interface_language")
        //Variable qui permet d'indiquer si il est dans la zone de settings de font (voir en bas)
        escape = true
        //Garde en Mémoire la taille de la font pour afficher la taille pas enregistrer lorsqu'il click sur Echap
        size_lang_previous = size_lang
    }

    BtnApply.addEventListener("click", ApplyFont);

    function ApplyFont() {
        //Rend non visible l'interface settings de font
        Div_language.classList.add("interface_language")
        Main.style.fontSize = size_lang
        //Mettre à jour la nouvelle taille de font
        localStorage.setItem("font", size_lang)
    }

    document.addEventListener("keydown", function (event) {
        //Variable qui permet d'indiquer si il est dans la zone de settings de font (voir en haut)
        if (escape) {
            if (event.key == "Escape") {
                Div_language.classList.add("interface_language")
                A_Lang.style.fontSize = size_lang_previous;
                Fr_lang.style.fontSize = size_lang_previous;
                En_lang.style.fontSize = size_lang_previous; d
                size_lang = size_lang_previous
                escape = false
            }
        }
    });

    Small_button.addEventListener("mousedown", function () {
        mousedown_lang = true;
        reduceFont();
    });

    Small_button.addEventListener("mouseup", function () {
        mousedown_lang = false;
    });

    Big_button.addEventListener("mousedown", function () {
        mousedown_lang = true;
        growFont();
    });

    Big_button.addEventListener("mouseup", function () {
        mousedown_lang = false;
    });

    function reduceFont() {
        if (mousedown_lang) {
            if (size_lang > 8) {
                size_lang -= 0.2;
                updateFontSize();
                requestAnimationFrame(reduceFont);
            }
        }
    }

    function growFont() {
        if (mousedown_lang) {
            if (size_lang < 25) {
                size_lang += 0.2;
                updateFontSize();
                requestAnimationFrame(growFont);
            }
        }
    }

    function updateFontSize() {
        const size_lang_str = size_lang.toString() + "px";
        A_Lang.style.fontSize = size_lang_str;
        Fr_lang.style.fontSize = size_lang_str
        En_lang.style.fontSize = size_lang_str
        console.log(size_lang_str)
    }

    // ------------------Storage Fonts------------------------------
    if (!localStorage.getItem("font")) {
        localStorage.setItem("font", size_lang);
        setStyles_Fonts();
    } else {
        setStyles_Fonts();
    }

    // When the user clicks on the button, scroll to the top of the document
    IconBtnLanguage.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    })
});
// mettre info_bulle avec nav lorsque mouseover sur icons Maison/logiciels,
//dark-mode Local Storage
//cursor none sur fleche top quand opacité 0,enlever l'espace nul de nav/ul/li,
//dark-mode et languages à droite
//resize lors du changement de version d'utilisation resize => set display none