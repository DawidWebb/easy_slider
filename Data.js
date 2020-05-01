class Data {
  constructor() {
    this.arrows = [...document.querySelectorAll(".img__arrow")];
    this.info = document.querySelector(".wrapper__info");
    this.pictures = [
      { img: "/img/1.jpg" },
      { img: "/img/2.jpg" },
      { img: "/img/3.jpg" },
      { img: "/img/4.jpg" },
    ];
    this.counter = 0;
  }
}
