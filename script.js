
// // // Current time

// // option1
// function clockFirst() {
//     const timeNow = new Date();
//     let currentHours = timeNow.getHours(),
//         currentMinutes = timeNow.getMinutes(),
//         currentSeconds = timeNow.getSeconds();
//     if (currentHours < 10, currentMinutes < 10, currentHours < 10) {
//         currentHours = "0" + currentHours;
//         currentMinutes = "0" + currentMinutes;
//         currentSeconds = "0" + currentSeconds;
//     }
//     document.body.innerText = currentHours + ':' + currentMinutes + ':' + currentSeconds;
// }
// setInterval(clockFirst, 1000);

// // option2
// function clockSecond() {
//     const timeNow = new Date();
//     let currentTime = "";
//     currentTime += timeNow.getHours() < 10 ? "0" + timeNow.getHours() : timeNow.getHours();
//     currentTime += ":";
//     currentTime += timeNow.getMinutes() < 10 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
//     currentTime += ":";
//     currentTime += timeNow.getSeconds() < 10 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();
//     document.body.innerText = currentTime;
// }
// setInterval(clockSecond, 1000);

// // //Deferred function

// // option1
// const deferredFunc1 = () => {
//     console.log('I\'m a delayed function!');
// }
// setTimeout(deferredFunc2, 3500);

// // // option2
// const deferredFunc2 = setTimeout(() => { console.log('I\'m a delayed function!') }, 3500);



// // // bubbleSort

function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let randomArr10 = ,
    randomArr100 = ,
    randomArr1000 = ;


