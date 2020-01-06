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
    activeFrameIndex: 0
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
    changeRowsAmount: function () {
      
    },
    changeColumnsAmount: function () {

    },
    changeFramesAmount: function () {

    },
  },
})
