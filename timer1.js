const args = (process.argv.slice(2)); //Take in command line argument,removing 1st 2 elements of path

const createTimer = function(time) {
  if (isNaN(time) || time === "" || time < 0) {
    console.log('Please provide a valid time');
    return;
  } else {
    setTimeout(() => {
      console.log(`Beep: ${time}`);
    }, time * 1000);
  }
};

for (let arg of args) {
  createTimer(arg);
}