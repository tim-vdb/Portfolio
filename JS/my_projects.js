const my_projects = [
    {
        "description": "blabla",
        "url": "",
        "alt": "salut",
        "title": "nice",
        "tags": "PHP"
    },
    {
        "description": "blabla",
        "url": "",
        "alt": "",
        "title": "",
        "tags": ["tag1", "tag2"]
    }
]

document.addEventListener("DOMContentLoaded", () => {


    const filter_cards = document.querySelector(".filter_cards")
    const tags_input = document.querySelectorAll("input");
    let value_input = 0

    function create_cards() {
        my_projects.forEach(project => {
            let cards = document.createElement("li");
            cards.className = "cards";

            let img_cards = document.createElement("img");
            img_cards.src = project.url;
            img_cards.alt = project.alt;
            cards.appendChild(img_cards);

            let title_cards = document.createElement("h2");
            title_cards.textContent = project.title;
            cards.appendChild(title_cards);

            let desc_cards = document.createElement("p");
            desc_cards.textContent = project.description;
            cards.appendChild(desc_cards);

            let tag_cards = document.createElement("p");
            tag_cards.textContent = project.tags;
            tag_cards.className = "tag_cards";
            cards.appendChild(tag_cards);

            filter_cards.appendChild(cards)
        });
    }

    function get_tags() {
        tags_input.forEach(tag_input => {
            tag_input.addEventListener("change", () => {
                value_input = tag_input.value;
                check_cards()
                console.log(value_input);
            });
        });

    }

    function check_cards() {
        
        let li_cards = tag_input.closest(".cards")

        if (value_input == tag_input ) {
            li_cards.style.display = "block";
        } else {
            li_cards.style.display = "none";
        }
    }

    create_cards();
    get_tags();
});