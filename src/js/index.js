//*First grab all DOM elements
//*Second create global variables with time rations for totalTime, breathe, and hold actions
//*Third create breathAnimation() function uses setTimeOut that waits certain amount of time to do something
//*Look at innerText order top to bottom = Breathe in, Hold, Breathe Out

const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2; //3 secs for the breath time
const holdTime = (totalTime / 5); //1.5 secs for the hold time

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime); //# of sec we want to wait to start breath out
  }, breatheTime); //# of secs we want to wait for breath time to occur
}

//run this breath hold breath out cycle every 7.5 seconds so we pass in breathAnimation function and totalTime parameters
setInterval(breathAnimation, totalTime);
