// $(function(){
//     // first solution
//     $("#increase-link").click(function(){
//         // did not parse in at the start and data is store in display
//         let currentNumber = $("#counter").text();
//         currentNumber = parseInt(currentNumber);
//         currentNumber += 1;
//         $("#counter").text(currentNumber);
//     })

//     $("#reset").click(function(){
//         $("#counter").text("0");
//     })
// })


//  Proper method
// Not affected by changes to the html
// Model = the variable counter update the data and display
// View = function to display
// Controller = the counter
let counter = 0;
$(function(){

    // State variable to store data
    $("#increase-link").click(function(){
        counter += 1;
        updateDisplay();
    })

    $("#reset").click(function(){
        counter = 0;
        updateDisplay();
    })

})

function updateDisplay(){
    $("#counter").text(counter)
}