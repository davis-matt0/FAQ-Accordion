const questions = document.querySelectorAll(".question-container");
const answers = document.querySelectorAll(".answer");

answers.forEach((answer) => {
  answer.classList.add("hidden");
});

questions.forEach((q) => {
  q.addEventListener("click", function () {
    let container = this.parentElement;
    let answer = container.querySelector(".answer");
    let icon = container.querySelector(".plus-icon");
    answer.classList.toggle("hidden");
    answer.classList.toggle("visible");
    if (answer.classList.contains("visible")) {
      icon.src = "./assets/images/icon-minus.svg";
      icon.alt =
        "a minus icon that hides the answer to the question when clicked";
    } else {
      icon.src = "./assets/images/icon-plus.svg";
      icon.alt =
        "a plus icon that reveals the answer to the question when clicked";
    }
  });
});
