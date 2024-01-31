// // Declare variables to hold the time values
// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let count = 0;

// // Declare a variable to hold the interval ID
// let interval;

// // Function to update the stopwatch display
// function updateDisplay() {
//     document.getElementById('hr').innerText = hours.toString().padStart(2, '0');
//     document.getElementById('min').innerText = minutes.toString().padStart(2, '0');
//     document.getElementById('sec').innerText = seconds.toString().padStart(2, '0');
//     document.getElementById('count').innerText = count.toString().padStart(2, '0');
// }

// // Function to start the stopwatch
// function timeStart() {
//     interval = setInterval(function() {
//         count++;
//         if (count === 100) {
//             count = 0;
//             seconds++;
//             if (seconds === 60) {
//                 seconds = 0;
//                 minutes++;
//                 if (minutes === 60) {
//                     minutes = 0;
//                     hours++;
//                 }
//             }
//         }
//         updateDisplay();
//     }, 10); // 10 milliseconds for hundredths of a second
// }

// // Function to stop the stopwatch
// function timeStop() {
//     clearInterval(interval);
// }

// // Function to reset the stopwatch
// function timeReset() {
//     clearInterval(interval);
//     hours = 0;
//     minutes = 0;
//     seconds = 0;
//     count = 0;
//     updateDisplay();
// }

// // Initialize the display
// updateDisplay();

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;
        if (count === 100) {
            second++;
            count = 0;
        }
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = '0' + secString;
        }

        if (count < 10) {
            countString = '0' + countString;
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);

    };
};