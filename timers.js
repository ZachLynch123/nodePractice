const waitTime = 3000;
let currentTime = 0;
let waitInterval = 500;


console.log('wait for it...');

let interval = setInterval(() => {
    currentTime += waitInterval;
    console.log(`waiting ${currentTime / 1000} seconds`);
}, waitInterval);


setTimeout(() => {
    clearInterval(interval);
    console.log('done');
    
}, waitTime);