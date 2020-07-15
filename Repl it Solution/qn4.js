// MVC Approach

// Model
let first = "cat";
let second = "dog";

function swap() {
    let t = first;
    first = second;
    second = t;
}

// Controller
$(function(){
    // update display after javscript begins
    updateDisplay();

    $("#swap").click(function(){
        swap();
        updateDisplay();
    })
})

// View
function updateDisplay(){
    $("#first").val(first);
    $("#second").val(second);
}