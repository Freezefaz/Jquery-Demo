$(function(){
  $("#greet").click(function(){
    //   Extract out value
    let name = $("#name-input").val();
    console.log(name);
    // can also use + if they are strings
    alert(`Hi ${name}`)
  });
});