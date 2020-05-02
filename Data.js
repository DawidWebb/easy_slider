class Data {
  constructor() {
    this.arrows = [...document.querySelectorAll(".img__arrow")];
    this.info = document.querySelector(".wrapper__info");
    this.pictures = [
      { img: new URL("https://picsum.photos/200") },
      { img: new URL("https://picsum.photos/300") },
      { img: new URL("https://picsum.photos/100") },
      { img: new URL("https://picsum.photos/400") },
    ];
    this.counter = 0;
  }
}
