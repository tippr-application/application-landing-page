// class Feature {
//     constructor(element) {
//         this.element = element;

//         this.data = this.element.dataset.feature;

//         this.contentElement = document.querySelector(`.feature-text[data-feature="${this.element.dataset.feature}"]`)
        
//         this.featureContent = new FeatureContent(this.contentElement);

//         this.element.addEventListener("click", () => this.select())

//     }

//     select() {
//         document.querySelectorAll(".feature-imgs img").forEach(element => element.classList.remove("feature-img-selected"));

//         this.element.classList.add("feature-img-selected");

//         this.featureContent.select();
//     }
// }

// class FeatureContent {
//     constructor(element) {
//         this.element = element;
//     }

//     select() {
//         document.querySelectorAll(".feature-text").forEach(e => e.classList.remove("feature-text-selected"));

//         this.element.classList.add("feature-text-selected");
//         this.element.classList.remove("text-hidden");
//     }
// }

// const features = document.querySelectorAll(".feature-imgs img").forEach(feature => new Feature(feature))