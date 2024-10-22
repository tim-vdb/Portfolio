document.addEventListener("DOMContentLoaded", function () {
    //-------------Main Projects----------------------------
    const observer_projects = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show_aperçu");
            } else {
                entry.target.classList.remove("show_aperçu");
            }
        });
    }, { threshold: 0.5 });

    const Aperçu = document.querySelectorAll(".aperçu_gauche, .aperçu_droite")
    Aperçu.forEach((el) => observer_projects.observe(el));

    //-------------Menu Burger----------------------------
    const MenuBurger_enable = document.getElementById("MenuBurger_enable");
    const MenuBurger_disable = document.getElementById("MenuBurger_disable");
    const sansMenuBurger = document.getElementById("sansMenuBurger");
    const avecMenuBurger = document.getElementById("avecMenuBurger");
    const Adobe_Suite_Menuburger = document.getElementById("adobe_suite_menuburger");
    const li_adobes_navtel = document.querySelectorAll(".adobe_navtel")
    const Moi_Orange_MenuBurger = document.getElementById("moi_orange_Menuburger");
    const Footer = document.querySelector("footer")

    // let under_1000px = false

    MenuBurger_enable.addEventListener("click", function () {
        sansMenuBurger.classList.add("sansMenuBurger");
        avecMenuBurger.classList.remove("avecMenuBurger");
        // under_1000px = true
    });
    // 
    // if (under_1000px == true) {
    //     if (window.innerWidth > 1000) {
    //         avecMenuBurger.style.display = "none";
    //         console.log("L'écran dépasse 1000 pixels de largeur.");
    //     }
    // }

    MenuBurger_disable.addEventListener("click", function () {
        sansMenuBurger.classList.toggle("sansMenuBurger");
        avecMenuBurger.classList.toggle("avecMenuBurger");
    });

    Adobe_Suite_Menuburger.addEventListener("click", () => {
        Adobe_Suite_Menuburger.classList.toggle("adobeSuiteAddition")
        li_adobes_navtel.forEach((li_adobe_navtel) => {
            li_adobe_navtel.classList.toggle("active_li_adobe");
        });
        Footer.classList.toggle("margin_footer_MenuBurger");
    });
});