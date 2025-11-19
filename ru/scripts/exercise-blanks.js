document.querySelectorAll('.exercise-blanks').forEach((exercise) => {
    exercise.querySelector('#check-blanks-btn').addEventListener('click', () => {
        let score = 0;
        const blanks = exercise.querySelectorAll('.blank');
        blanks.forEach(blank => {
            const userAnswer = blank.value.trim().toLowerCase();
            let correctAnswer = blank.dataset.answer.trim();
            blank.classList.remove('correct', 'incorrect');
            if (correctAnswer[0] === '/') {
                correctAnswer = correctAnswer.substring(1, correctAnswer.length);
                correctAnswer = new RegExp(correctAnswer);
                console.log(correctAnswer);
                if (correctAnswer.test(userAnswer)) {
                    blank.classList.add('correct');
                    score++;
                } else {
                    blank.classList.add('incorrect');
                }
            } else {
                if (userAnswer === correctAnswer) {
                    blank.classList.add('correct');
                    score++;
                } else {
                    blank.classList.add('incorrect');
                }
            }
        });
        exercise.querySelector('#blanks-score-text').textContent = `Баллы: ${score}/${blanks.length}`;
    });

    exercise.querySelector('#reset-blanks-btn').addEventListener('click', () => {
        exercise.querySelectorAll('.blank').forEach(blank => {
            blank.value = '';
            blank.classList.remove('correct', 'incorrect');
        });
    });

    exercise.querySelectorAll('.blank').forEach(blank => {
        blank.addEventListener('input', () => {
            blank.classList.remove('correct', 'incorrect');
        });
    });
});