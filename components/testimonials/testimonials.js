class Testimonial {
    constructor(element) {
        this.element = element;

        this.element.addEventListener("mouseover", () => this.squeeze());
        this.element.addEventListener("mouseout", () => this.unsqueeze());
    }

    squeeze() {
        this.element.style.justifyContent = "space-evenly";
    }

    unsqueeze() {
        this.element.style.justifyContent = "space-around";
    }
}

const testimonials = Array.from(document.querySelectorAll(".board-row")).map(element => element).forEach(element => new Testimonial(element));
