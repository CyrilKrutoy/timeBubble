
// // // Current time

// // option1
function clockFirst() {
    const timeNow = new Date();
    let currentHours = timeNow.getHours(),
        currentMinutes = timeNow.getMinutes(),
        currentSeconds = timeNow.getSeconds();
    if (currentHours < 10) {
        currentHours = "0" + currentHours;
    } else if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    } else if (currentHours < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    document.body.innerText = currentHours + ':' + currentMinutes + ':' + currentSeconds;
}
setInterval(clockFirst, 1000);

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
// // option1
// function bubbleSort(arr) {
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }


// function randomArr() {
//     const res = [];
//     for (let i = 1; i <= 1000; i++) {
//         res.push([Math.round(Math.random() * 2000 - 1000)]);
//     }
//     return res;
// }
// let randomArrTen = randomArr(),
//     randomArrHundred = randomArr(),
//     randomArrThousand = randomArr();

// randomArrTen.length = 10;
// randomArrHundred.length = 100;
// randomArrThousand.length = 1000;

// console.time('bubblesortTen');
// bubbleSort(randomArrTen);
// console.timeEnd('bubblesortTen');
// console.log(`length = ${randomArrTen.length} \n`)

// console.time('bubblesortHundred');
// bubbleSort(randomArrHundred);
// console.timeEnd('bubblesortHundred');
// console.log(`length = ${randomArrHundred.length} \n`)

// console.time('bubblesortThousand');
// bubbleSort(randomArrThousand);
// console.timeEnd('bubblesortThousand');
// console.log(`length = ${randomArrThousand.length} \n`)

// console.time('sortTen');
// randomArrTen.sort((prev, next) => prev - next);
// console.timeEnd('sortTen');
// console.log(`length = ${randomArrTen.length} \n`)

// console.time('sortHundred');
// randomArrHundred.sort((prev, next) => prev - next);
// console.timeEnd('sortHundred');
// console.log(`length = ${randomArrHundred.length} \n`)

// console.time('sortThousand');
// randomArrThousand.sort((prev, next) => prev - next);
// console.timeEnd('sortThousand');
// console.log(`length = ${randomArrThousand.length} \n`)


// // option2

// function bubbleSort(arr) {
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }


// function randomArr() {
//     const res = [];
//     for (let i = 1; i <= 1000; i++) {
//         res.push([Math.round(Math.random() * 2000 - 1000)]);
//     }
//     return res;
// }
// let randomArrTen = randomArr(),
//     randomArrHundred = randomArr(),
//     randomArrThousand = randomArr();

// randomArrTen.length = 10;
// randomArrHundred.length = 100;
// randomArrThousand.length = 1000;

// console.time('bubblesortTen');
// bubbleSort(randomArrTen);
// console.timeEnd('bubblesortTen');
// console.log(`length = ${randomArrTen.length} \n`)

// console.time('bubblesortHundred');
// bubbleSort(randomArrHundred);
// console.timeEnd('bubblesortHundred');
// console.log(`length = ${randomArrHundred.length} \n`)

// console.time('bubblesortThousand');
// bubbleSort(randomArrThousand);
// console.timeEnd('bubblesortThousand');
// console.log(`length = ${randomArrThousand.length} \n`)

// console.time('sortTen');
// randomArrTen.sort((prev, next) => next - prev);
// console.timeEnd('sortTen');
// console.log(`length = ${randomArrTen.length} \n`)

// console.time('sortHundred');
// randomArrHundred.sort((prev, next) => next - prev);
// console.timeEnd('sortHundred');
// console.log(`length = ${randomArrHundred.length} \n`)

// console.time('sortThousand');
// randomArrThousand.sort((prev, next) => next - prev);
// console.timeEnd('sortThousand');
// console.log(`length = ${randomArrThousand.length} \n`)
