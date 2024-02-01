//do while loop

// let i = 5;
// do{
//     console.log(i);
//     i++;
// }while(i>10);

// let arr = [34, 3, 56,78, 90,332, 876,45];

// for (let item of arr){
//     if (item % 2 !== 0){
//         continue;
//     }
//     console.log(item);
// }

function updateCountdown(seconds) {
    console.log(seconds)
}

for (let i = 81; i>=65; i--){
    setTimeout(() => {
        updateCountdown(i);

        if (i === 65) {
            console.log('countdown complete');
        }
    }, (81 - i) * 1000);
}