class Dropdown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector(".fa-bars");

        this.content = this.element.querySelector(".dropdown-content");

        this.button.addEventListener('click', e => {
            this.toggleContent();
            e.preventDefault();
        });
    }

    toggleContent() {
        this.content.classList.toggle("dropdown-hidden");
        console.log("It's working!");
    }
}

let dropdowns = document.querySelectorAll(".dropdown").forEach(element => new Dropdown(element));