class Dropdown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector(".fa-bars");

        this.content = this.element.querySelector(".dropdown-content");

        this.element.querySelectorAll(".dropdown-link").forEach(link => new DropdownLink(link))

        this.button.addEventListener('click', e => {
            this.toggleContent();
            e.preventDefault();
        });
    }

    toggleContent() {
        this.content.classList.toggle("dropdown-hidden");
    }
}

class DropdownLink {
    constructor(element) {
        this.element = element;

        this.element.addEventListener('mouseover', () => this.toggleUnderscore())

        this.element.addEventListener('mouseout', e=> document.querySelectorAll(".dropdown-link").forEach(link => link.classList.remove("underscore-link")))

    }

    toggleUnderscore() {
        document.querySelectorAll(".dropdown-link").forEach(link => link.classList.remove("underscore-link"));
        this.element.classList.add("underscore-link");
    }
}

let dropdowns = document.querySelectorAll(".dropdown").forEach(element => new Dropdown(element));