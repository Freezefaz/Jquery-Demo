// Original answer
// $(function(){
    
//   $('#switch').click(function(){
//     $("#left").css('background-color', 'blue');
//     $('#right').css('background-color', 'red');
//   });
// })

// Change any colors
$(function(){
    $("#left").css("background-color", randomColor());
    $("#right").css("background-color", randomColor());

    $("#switch").click(function(){
        let leftColor = $("#left").css("background-color");
        let rightColor = $("#right").css("background-color");
        $("#left").css("background-color", rightColor);
        $("#right").css("background-color", leftColor);
    })
})

// changing to random color
function randomColor(){
    // generate a random number from 0 to 255
    let red = Math.floor(Math.random() * 266);
    let green = Math.floor(Math.random() * 266);
    let blue = Math.floor(Math.random() * 266);
    let color = `rgb(${red},${green},${blue})`;
    return color
}