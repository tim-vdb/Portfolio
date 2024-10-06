document.addEventListener("DOMContentLoaded", function () {
    //-------------Main Photoshop / Illustrator-------------------------
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
    const Moi_Orange_MenuBurger = document.getElementById("moi_orange_Menuburger");

    MenuBurger_enable.addEventListener("click", function () {
        sansMenuBurger.classList.add("sansMenuBurger");
        avecMenuBurger.classList.remove("avecMenuBurger");
    });

    MenuBurger_disable.addEventListener("click", function () {
        sansMenuBurger.classList.toggle("sansMenuBurger");
        avecMenuBurger.classList.toggle("avecMenuBurger");
    });
});