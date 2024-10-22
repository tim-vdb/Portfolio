document.addEventListener("DOMContentLoaded", function () {
    const observer_projects = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show_aperçu");
            }
        });
    }, { threshold: 0.5 });

    const Aperçu = document.querySelectorAll(".aperçu_gauche, .aperçu_droite, .aperçu_vaisseau, .aperçu_cryo")
    Aperçu.forEach((el) => observer_projects.observe(el));

    const h2_navette = document.getElementById("h2_navette");
    const navette = document.getElementById("navette")

    const observer_navette = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navette.style.display = "block";
            }
        });
    });
    observer_navette.observe(h2_navette);

    const h2_cryo = document.getElementById("h2_cryo");
    const cryo = document.getElementById("cryo")

    const observer_cryo = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cryo.style.display = "block";
            }
        });
    });
    observer_cryo.observe(h2_cryo);

    const créature = document.getElementById("img_créature1");
    const Opra = document.getElementById("Opra")

    const observer_créature = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Opra.style.display = "block";
                
            }
        });
    });
    observer_créature.observe(créature);

            
});