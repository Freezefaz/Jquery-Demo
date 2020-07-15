// $(function(){
//     $("#add-btn").click(function(){
//         // generate random number
//         let n = Math.floor((Math.random() * 10)+1);
//         // add p to div
//         $("#numbers").append(`<p>${n}</p>`)
//     })
//     $("#calculate-btn").click(function(){
//         let numbers = $("#numbers p");
//         let total = 0;
//         for (let eachNumber of numbers){
//             total += parseInt(eachNumber.innerText);
//         }
//         alert(total)
//     })
// })

// MVC Format

// Model
let numbers = [];
function addNumber(n){
    numbers.push(n);
}

function calculateTotal(){
    let t = 0;
    for(let n of numbers){
        t = t + n;
    }
    return t;
}

// Controller
$(function(){
    updateDisplay(numbers);

    $("#add-btn").click(function(){
        let n = Math.floor(Math.random()*10) + 1;
        addNumber(n);
        updateDisplay(numbers);
    })
    $("#calculate-btn").click(function(){
        let total = calculateTotal();
        alert(total);
    })
})

// View
function updateDisplay(numbersList){
    //remove all children
    $("#numbers").empty();
    for (let n of numbersList){
        $("#numbers").append(`<p>${n}</p>`)
    }
}