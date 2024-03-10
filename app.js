class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.playBtn = document.querySelector(".play");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    // console.log(this);
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    // console.log(step);
    const activeBars = document.querySelectorAll(`.b${step}`);
    // console.log(activeBars);
    // console.log(step);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
      //   console.log(this);
    }, interval);
  }
}

const drumKit = new DrumKit();
drumKit.start();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
});

drumKit.playBtn.addEventListener("click", function () {
  drumKit.start();
});
