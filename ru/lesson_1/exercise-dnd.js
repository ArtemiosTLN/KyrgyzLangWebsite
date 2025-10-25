document.querySelectorAll('.exercise-dnd').forEach((exercise, exIdx) => {
    const words = exercise.dataset.words.split(',').sort(() => Math.random() - 0.5);
    const correctOrder = exercise.dataset.words.split(',');
    let score = 0;
    let draggedWord = null;

    const slotsContainer = exercise.querySelector('.slots-container');
    slotsContainer.innerHTML = '';
    for (let i = 0; i < correctOrder.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.dataset.index = i;
        slotsContainer.appendChild(slot);
    }
    const wordsContainer = exercise.querySelector('.words-container');
    wordsContainer.innerHTML = '';
    words.forEach(word => {
        const div = document.createElement('div');
        div.className = 'draggable-word';
        div.draggable = true;
        div.dataset.word = word;
        div.textContent = word;
        wordsContainer.appendChild(div);
    });

    const slots = exercise.querySelectorAll('.slot');
    const wordDivs = exercise.querySelectorAll('.draggable-word');
    const checkBtn = exercise.querySelector('.check-btn');
    const resetBtn = exercise.querySelector('.reset-btn');
    const scoreText = exercise.querySelector('.score-text');

    function updateScoreText() {
        scoreText.textContent = `Баллы: ${score}/${correctOrder.length}`;
    }
    updateScoreText();

    wordDivs.forEach(word => {
        word.addEventListener('dragstart', () => {
            draggedWord = word;
            setTimeout(() => word.style.visibility = 'hidden', 0);
        });
        word.addEventListener('dragend', () => {
            word.style.visibility = 'visible';
        });
    });

    slots.forEach(slot => {
        slot.addEventListener('dragover', (e) => {
            e.preventDefault();
            slot.style.borderColor = '#fdab13';
        });
        slot.addEventListener('dragleave', () => {
            slot.style.borderColor = '#9c3030';
        });
        slot.addEventListener('drop', (e) => {
            e.preventDefault();
            slot.style.borderColor = '#9c3030';
            if (draggedWord) {
                if (slot.firstChild) {
                    wordsContainer.appendChild(slot.firstChild);
                }
                slot.appendChild(draggedWord);
                slot.classList.add('filled');
                slot.style.width = (draggedWord.offsetWidth + 24) + 'px';
            }
        });
    });

    wordsContainer.addEventListener('dragover', (e) => e.preventDefault());
    wordsContainer.addEventListener('drop', () => {
        if (draggedWord) {
            wordsContainer.appendChild(draggedWord);
            slots.forEach(slot => {
                if (slot.contains(draggedWord)) {
                    slot.classList.remove('filled');
                    slot.style.width = '100px';
                }
            });
        }
    });

    checkBtn.onclick = function() {
        score = 0;
        wordDivs.forEach(w => w.classList.remove('correct-word', 'incorrect-word'));
        slots.forEach((slot, idx) => {
            const wordDiv = slot.firstChild;
            if (wordDiv) {
                const word = wordDiv.dataset.word;
                if (word === correctOrder[idx]) {
                    wordDiv.classList.add('correct-word');
                    wordDiv.classList.remove('incorrect-word');
                    score++;
                } else {
                    wordDiv.classList.add('incorrect-word');
                    wordDiv.classList.remove('correct-word');
                }
            }
        });
        updateScoreText();
    };

    resetBtn.onclick = function() {
        wordDivs.forEach(word => {
            wordsContainer.appendChild(word);
            word.classList.remove('correct-word', 'incorrect-word');
        });
        slots.forEach(slot => {
            slot.classList.remove('filled');
            slot.style.width = '100px';
        });
        score = 0;
        updateScoreText();
    };
});