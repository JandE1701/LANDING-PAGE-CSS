(function () {
    const titleQuestions = [...document.querySelectorAll(".questions__title")];

    titleQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            let changeColor = question.parentElement.parentElement;


            addPadding.classList.toggle("questions__padding--add");
            question.children[0].classList.toggle("questions__arrow--rotate");
            changeColor.classList.toggle("questions__padding1")

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();
