class Slider extends Data {
  constructor(props) {
    super(props);
    this.showDiv = document.querySelector(".img__img");
    this.arrows.forEach((arrow) =>
      arrow.addEventListener("click", this.select.bind(this))
    );
  }
  select(e) {
    if (e.target === this.arrows[1]) {
      if (this.counter < this.pictures.length - 1) {
        this.counter++;
        this.showDiv.src = this.pictures[this.counter].img;
        this.info.textContent = `${this.counter + 1} / ${this.pictures.length}`;
      } else if (this.counter === this.pictures.length) {
        this.counter = this.counter;
      }
    } else if (e.target === this.arrows[0]) {
      if (this.counter === 0) {
        this.counter = this.counter;
      } else if (this.counter > 0) {
        this.counter--;
        this.showDiv.src = this.pictures[this.counter].img;
        this.info.textContent = `${this.counter + 1} / ${this.pictures.length}`;
      }
    }
    this.arrowsShow();
  }
  arrowsShow = () => {
    if (this.counter === 0) {
    }
  };
}

const slider = new Slider();
