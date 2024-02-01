const nums = [23, 54, 998, 109, 76, 665];
let someOfEven = 0;
let someOfOdd = 0;

for(let i = 0; i<nums.length; i++){
    const x = nums[i];

    if (x % 2 === 1) {
        someOfOdd += x
    }
    else{
        someOfEven += x;
    }
}

console.log(someOfEven)
console.log(someOfOdd)