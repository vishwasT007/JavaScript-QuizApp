const correctAnswer = ["B","B","D","C","D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const tryAgain = document.querySelector(".reload");
const questions = document.querySelectorAll(".question");


form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Selected");

    let score = 0;
    const userAnswers = [form.Q1.value,form.Q2.value,form.Q3.value,form.Q4.value,form.Q5.value,];
    console.log(userAnswers);

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]) {
            // console.log('correct answer', index);
            score++;
            questions[index].classList.add("correct");
        } else {
            questions[index].classList.add("wrong");
        }
    })

    console.log(score);


    scrollTo(0,0);
    result.classList.remove("hide");
    result.querySelector("p").textContent = `You Scored ${score}/5!!`
});

tryAgain.addEventListener("click", () => {
    document.location.reload();
})