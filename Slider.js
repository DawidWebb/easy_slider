class Slider extends Data {
  constructor(props) {
    super(props);
    this.showDiv = document.querySelector(".img");
    this.arrows.forEach((arrow) =>
      arrow.addEventListener("click", this.select.bind(this))
    );
  }
  select(e) {
    if (e.target === this.arrows[1]) {
      console.log("left");
    } else if (e.target === this.arrows[0]) {
      console.log("right");
    }
  }
}

const slider = new Slider();
