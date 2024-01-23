const modalObj = {
  modal: document.querySelector("div.modal"),
  modalExit: document.querySelector("#modalExit"),
  modalImg: document.querySelector("img.modal-content"),
  leftArrow: document.querySelector("#leftArrow"),
  rightArrow: document.querySelector("#rightArrow"),
  gridCont: document.querySelector("div.grid-container"),
  gridDivs: document.querySelectorAll(".grid-container div"),
  imgCount: 1,
  openModal: function () {
    this.gridDivs.forEach((div) => {
      div.addEventListener("click", () => {
        this.modal.classList.remove("hidden");
        this.imgCount = div.firstChild.getAttribute("order") * 1;
        this.modalImg.setAttribute("src", div.firstChild.getAttribute("src"));
      });
    });
    this.keyChangeImg();
    this.clickLeftArrow();
    this.clickRightArrow();
  },
  keepModal: function () {
    this.modalImg.addEventListener("click", () => {
      return;
    });
  },
  exitModal: function () {
    this.modalExit.addEventListener("click", () => {
      this.modal.classList.toggle("hidden");
    });
  },
  keyChangeImg: function () {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.leftLogic();
          break;
        case "ArrowRight":
          this.rightLogic();
          break;
      }
    });
  },
  assignImg: function () {
    let currentImg = this.gridCont.querySelector(`[order="${this.imgCount}"]`);
    this.modalImg.setAttribute("src", currentImg.getAttribute("src"));
  },
  leftLogic: function () {
    if (this.imgCount === 1) {
      let lastImg = this.gridCont.childElementCount - 1;
      this.imgCount =
        this.gridCont.children[lastImg].firstChild.getAttribute("order") * 1;
    } else if (this.imgCount > 1) {
      this.imgCount--;
    }
    this.assignImg();
  },
  rightLogic: function () {
    if (this.imgCount === this.gridCont.childElementCount) {
      this.imgCount = 1;
    } else {
      this.imgCount++;
    }
    this.assignImg();
  },
  clickLeftArrow: function () {
    this.leftArrow.addEventListener("click", () => {
      this.leftLogic();
    });
  },
  clickRightArrow: function () {
    this.rightArrow.addEventListener("click", () => {
      this.rightLogic();
    });
  },
};

modalObj.openModal();
modalObj.keepModal();
modalObj.exitModal();
