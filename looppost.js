const arr = ["Laptop", "Mobile", "Tv", "Desktop", "I pad", "watch"]

for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    // console.log(element)
}

for(const element of arr) {
    // console.log("for of ", element);
}

const person = {
    name: "Joy Saha",
    age: 26,
    height: "5'7",
    address: {
        parmanent: "Rangpur",
        present: "comilla"
    },
    pace: "Ujjol shamla",
    occuption: "student"
}

for(const element in person){
    // console.log(element)
    console.log(element, ":", person[element]);
}