document.getElementById('check-blanks-btn').addEventListener('click', () => {
    let score = 0;
    const blanks = document.querySelectorAll('.blank');
    blanks.forEach(blank => {
        const userAnswer = blank.value.trim().toLowerCase();
        const correctAnswer = blank.dataset.answer.trim().toLowerCase();
        blank.classList.remove('correct', 'incorrect');
        if (userAnswer === correctAnswer) {
            blank.classList.add('correct');
            score++;
        } else {
            blank.classList.add('incorrect');
        }
    });
    document.getElementById('blanks-score-text').textContent = `Баллы: ${score}/${blanks.length}`;
});

document.getElementById('reset-blanks-btn').addEventListener('click', () => {
    document.querySelectorAll('.blank').forEach(blank => {
        blank.value = '';
        blank.classList.remove('correct', 'incorrect');
    });
});

document.querySelectorAll('.blank').forEach(blank => {
    blank.addEventListener('input', () => {
        blank.classList.remove('correct', 'incorrect');
    });
});