var app = new Vue({
  el: '#app',
  data: {
    frames: [
      [["#ff0000", "#00ff00", "#0000ff"], ["#ff0000", "#00ff00", "#0000ff"]],
      [["#000000", "#ff0000", "#00ff00"], ["#000000", "#ff0000", "#00ff00"]],
      [["#000000", "#000000", "#ff0000"], ["#000000", "#000000", "#ff0000"]],
      [["#000000", "#000000", "#000000"], ["#ff0000", "#00ff00", "#0000ff"]],
    ],
    delay: 500,
    intervalId: null,
    activeFrameIndex: 0,
    frameWidth: 3,
    frameHeight: 2,
  },
  computed: {
    activeFrame: function () {
      return this.frames[this.activeFrameIndex];
    },
    isPlaying: function () {
      return this.intervalId !== null;
    }
  },
  methods: {
    startEmulation: function () {
      this.intervalId = setInterval(() => {
        this.activeFrameIndex = this.frames.length - 1 > this.activeFrameIndex ?
          this.activeFrameIndex + 1 : 0;
      }, this.delay);
    },
    pauseEmulation: function () {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    stopEmulation: function () {
      this.activeFrameIndex = 0;
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    changeRowsAmount: function (event) {
      let newAmount = event.target.value
      this.frameHeight = +newAmount;
      console.log(newAmount)
      console.log(this.frames.length)
      this.frames = Array(this.frames.length).fill(Array(this.frameHeight).fill(Array(this.frameWidth).fill("#000000")))
    },
    changeColumnsAmount: function () {
      let newAmount = event.target.value
      this.frameWidth = +newAmount;
      console.log(newAmount)
      console.log(this.frames.length)
      this.frames = Array(this.frames.length).fill(Array(this.frameHeight).fill(Array(this.frameWidth).fill("#000000")))
    },
    changeFramesAmount: function () {
      const newAmountDelta = event.target.value - this.frames.length;
      const lastIndex = this.frames.length - 1;

      if(newAmountDelta == 0) return;
      if(newAmountDelta > 0) {
        const newFrames = Array(newAmountDelta).fill(Array(this.frameHeight).fill(Array(this.frameWidth).fill("#000000")))
        this.frames = this.frames.concat(newFrames);
        this.activeFrameIndex = this.activeFrameIndex == lastIndex ? this.frames.length - 1 : this.activeFrameIndex;
      } else {
        this.frames.splice(this.frames.length + newAmountDelta, -newAmountDelta);
        this.activeFrameIndex = this.activeFrameIndex == lastIndex ? this.frames.length - 1 : this.activeFrameIndex;
      }
    },
  },
})
