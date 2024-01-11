// //iterate
// var arr = [1, 2, 3, 4, 5, 0, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// // arr.forEach(function(element) {
// //     console.log(element);
// // }


// let j = 0;
// // const ac = 90;
// // k = j + ac++; //ac ha constant ahe tyamul tyachyavar kontehi operation hot nahi
// // console.log(k)


// // dowhile
// var arr = [1, 90, 3, 4, 5, 0, 6, 7];
// // while (j < arr.length) {
// //     console.log(arr[j]);
// //     j++;
// // }

// do {
//     console.log(arr[j])
//     j++;

// } while (j < arr.length);


// var arr = [1, 90, 3, 47, 5, 9, 68, 79];
// for (i = 0; i < arr.length; i++) {
//     if (i == 5) { //length can not start 0
//         continue;
//         break;
//     }
//     console.log(arr[i])
// }


// let myarr = ["ok", "kiran", 12, 67, true, null]
// console.log(myarr.length);

// myarr.push("yogesh")
// myarr.pop(); //remove last element in the array
// myarr.shift() //remove first element inthe array

// const newLen = myarr.unshift("yogesh")
// console.log(myarr);


// //sort hot alphabetical ni
// let Arr = ["Shubham", "Kiran", "Abhi", "Bharat", "Sanket", 67]
//     //Arr.sort()
// Arr.toString()
// console.log(Arr)


// //string operation
// let MynewString = "My name is Kiran Pathade";
// console.log(MynewString.length); //print the length
// console.log(MynewString.indexOf("Kiran")); //print index number of the word
// console.log(MynewString.lastIndexOf('e'));
// console.log(MynewString.slice(10, 16)); //print the name between the index number
//d = MynewString.replace("Kiran", "shubham");
// console.log(d);
// let MyDate = new Date();
// console.log(MyDate.getTime());
// console.log(MyDate.getFullYear());
// console.log(MyDate.getDay());
// console.log(MyDate.getMinutes());
// console.log(MyDate.getHours());

//DOM manipulation
let elem = document.getElementById("click")
    // console.log(elem);
    // let elemclass = document.getElementsByClassName("container");
    // console.log(elemclass)

// let con = document.getElementById("ok")
// console.log(con)

// let box = document.getElementsByClassName("box");
// console.log(box);

// elemClass[0].classList.add("box")
tn = document.getElementsByTagName('button')
console.log(tn)

//create element

// createdElement = document.createElement('p')
// createdElement.innerText = "this is a kiran";
// tn[0].appendchild(createdElement)

// createdElement2 = document.createElement('b')
// createdElement2.innerText = "this is bold"

sel = document.querySelector(".container")
console.log(sel)
sel = document.querySelectorAll(".container")
console.log(sel)
sel = document.querySelector("box");
console.log(sel);

function clicked() {
    console.log("the button is clicked")
}

function clicked1() {
    console.log("kiran")
}

function kiran() {
    console.log("click")
}

//events injavascript
firstContainer.addEventListener('mouseover', function() {
    console.log("Mouse on Container")
})

firstContainer.addEventListener('mouseout', function() {
    console.log("Mouse out of Container");
})

firstContainer.addEventListener('mouseover', function() {
    console.log("mouse on container")
})


//arrow function
function summ(a, b) {
    return a + b;
}

summ = (a, b) => {
    return a + b;
}

log = () => {
    console.log("I am Your Log")
}
setTimeout(log, 2000);