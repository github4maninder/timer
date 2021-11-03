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

// TEST 
// node timer1.js 3 5 7 -1

// EDGE CASES
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.