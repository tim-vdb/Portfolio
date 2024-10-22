const Section_first = document.getElementById("first");
const Section_last = document.getElementById("last");
const Header = document.querySelector("header");



document.addEventListener("DOMContentLoaded", function () {
    const h2_saturne = document.getElementById("h2_saturne");
    const Saturne = document.getElementById("Saturne")

    const observer_saturne = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Saturne.style.display = "block";
            } else {
                Saturne.style.display = "none";
            }
        });
    });
    observer_saturne.observe(h2_saturne);

    const h2_Jupiter = document.getElementById("h2_Jupiter");
    const Jupiter = document.getElementById("Jupiter")

    const observer_jupiter = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Jupiter.style.display = "block";
            } else {
                Jupiter.style.display = "none";
            }
        });
    });
    observer_jupiter.observe(h2_Jupiter);

    const h2_Venus = document.getElementById("h2_Venus");
    const Venus = document.getElementById("Venus")

    const observer_venus = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Venus.style.display = "block";
            } else {
                Venus.style.display = "none";
            }
        });
    });
    observer_venus.observe(h2_Venus);

    const h2_Mercure = document.getElementById("h2_Mercure");
    const Mercure = document.getElementById("Mercure")

    const observer_mercure = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Mercure.style.display = "block";
            } else {
                Mercure.style.display = "none";
            }
        });
    });
    observer_mercure.observe(h2_Mercure);

    const h2_Neptune = document.getElementById("h2_Neptune");
    const Neptune = document.getElementById("Neptune")

    const observer_neptune = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Neptune.style.display = "block";
            } else {
                Neptune.style.display = "none";
            }
        });
    });
    observer_neptune.observe(h2_Neptune);
});

