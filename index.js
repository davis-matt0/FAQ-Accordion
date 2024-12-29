const answers = document.querySelectorAll(".answer");
const btns = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".question-container");

// for (let answer = 0; answer < answers.length; answer++) {
//   answers[answer].classList.add("hidden");
//   for (let btn = 0; btn < btns.length; btn++) {
//     btns[btn].addEventListener("click", function () {
//       answers[answer].classList.toggle("hidden");
//       answers[answer].classList.toggle("visible");
//       if (answers[answer].classList.contains("visible")) {
//         btns[btn].innerHTML = `
//       <img
//             src="./assets/images/icon-minus.svg"
//             alt="a minus icon that hides the answer to this question"
//             class="plus-icon"
//         />
//       `;
//       } else {
//         btns[btn].innerHTML = `
//         <img
//             src="./assets/images/icon-plus.svg"
//             alt="a plus icon that reveals the answer to this question"
//             class="plus-icon"
//         />
//         `;
//       }
//     });
//   }
// }

for (let answer = 0; answer < answers.length; answer++) {
  answers[answer].classList.add("hidden");
  for (let question = 0; question < questions.length; question++) {
    questions[question].addEventListener("click", function () {
      answers[answer].classList.toggle("hidden");
      answers[answer].classList.toggle("visible");
    });
    for (let btn = 0; btn < btns.length; btn++) {
      if (answers[answer].classList.contains("visible")) {
        btns[btn].innerHTML = `
      <img
            src="./assets/images/icon-minus.svg"
            alt="a minus icon that hides the answer to this question"
            class="plus-icon"
        />
      `;
      } else {
        btns[btn].innerHTML = `
        <img
            src="./assets/images/icon-plus.svg"
            alt="a plus icon that reveals the answer to this question"
            class="plus-icon"
        />
        `;
      }
    }
  }
}
