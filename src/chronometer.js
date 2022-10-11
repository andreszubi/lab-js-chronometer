class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.intervalId = null;
  }

  start(printTimeCallback) {
this.intervalId = setInterval(() => {
  this.currentTime += 1;
  if (printTimeCallback) {
    printTimeCallback();
  }
 }, 1000);
}
  getMinutes() {
    const minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
  const seconds = this.currentTime % 60;
  return Math.floor(seconds);
  }

  computeTwoDigitNumber(value) {
   const convString = value.toString(); 
    if (convString.length < 2 ) {
      return "0" + convString
    }
    else {
      return convString;
    }
  }
  stop() {
    clearInterval();
     if (this.currentTime) {
      clearInterval(this.intervalId);
     }
  
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
   let minutes = this.computeTwoDigitNumber(this.getMinutes());
   let seconds = this.computeTwoDigitNumber(this.getSeconds());
   return `${minutes}:${seconds}`;
  
  }
}
