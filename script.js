let tasksCompleted = 0;

// Add Lecture
document.getElementById("addLectureBtn").addEventListener("click", function () {
  let input = document.getElementById("lectureInput");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  document.getElementById("lectureList").appendChild(li);
  input.value = "";
});

// Add Task
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  li.addEventListener("click", function () {
    if (!li.classList.contains("done")) {
      li.classList.add("done");
      li.style.textDecoration = "line-through";
      tasksCompleted++;
      updateAnalysis();
    }
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
});

// Quiz Logic
let options = document.querySelectorAll(".option");

options.forEach(button => {
  button.addEventListener("click", function () {
    let value = button.textContent;
    let result = document.getElementById("result");

    if (value === "4") {
      result.textContent = "Correct!";
    } else {
      result.textContent = "Wrong!";
    }
  });
});

// Update Analysis
function updateAnalysis() {
  document.getElementById("analysisText").textContent =
    "Tasks Completed: " + tasksCompleted;
}
