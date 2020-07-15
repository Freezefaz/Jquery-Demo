// jQuery Ready
$(function(){
    $("#add-task-btn").click(function(){
        // document.querySelector("#task-name").value
        let taskName = $("#task-name").val();

        // let newTask = document.createElement("li");
        // newTask.innerText = taskName;
        //     newTask.addEventListener('click', function() {
        //     alert(taskName)
        // })
        // document.querySelector("#task-list").appendChild(newTask)
    

    // Version 1
        // $("#task-list").append(
        //         $(`<li>${taskName}</li>`).click(function(){
        //         alert(taskName);
        //     })
        // )


        // Version 2
        let newTask = $(`<li>${taskName}<button>Delete</button></li>)`);
        newTask.find("button").click(function(){
            newTask.remove();
        })
        $("#task-list").append(newTask);

    })
})