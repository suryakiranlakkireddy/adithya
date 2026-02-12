
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function () {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
