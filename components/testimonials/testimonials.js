class Testimonial {
    constructor(element) {
        this.element = element;

        this.element.addEventListener("mouseover", () => this.squeeze());
        this.element.addEventListener("mouseout", () => this.unsqueeze());
    }

    squeeze() {
        this.element.style.justifyContent = "space-evenly";
        console.log("TEST")
    }

    unsqueeze() {
        this.element.style.justifyContent = "space-around";
    }
}

const testimonials = document.querySelectorAll(".board-row").forEach(element => new Testimonial(element));
