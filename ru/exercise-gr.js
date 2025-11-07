document.querySelectorAll('.exercise-gr').forEach((exercise) => {
    // data-categories: "Категория 1,Категория 2"
    // data-words: "Мен:Категория 1,студентмин:Категория 2,прочее:Категория 1"
    const categories = (exercise.dataset.categories || '').split(',').map(s => s.trim()).filter(Boolean);
    const wordsRaw = (exercise.dataset.words || '').split(',').map(s => s.trim()).filter(Boolean);

    // containers
    let catsContainer = exercise.querySelector('.categories-container');
    if (!catsContainer) {
        catsContainer = document.createElement('div');
        catsContainer.className = 'categories-container';
        exercise.prepend(catsContainer);
    }
    let wordsContainer = exercise.querySelector('.words-container');
    if (!wordsContainer) {
        wordsContainer = document.createElement('div');
        wordsContainer.className = 'words-container';
        exercise.appendChild(wordsContainer);
    }

    // build category boxes (drop areas)
    catsContainer.innerHTML = '';
    categories.forEach(cat => {
        const catWrap = document.createElement('div');
        catWrap.className = 'category';
        const title = document.createElement('div');
        title.className = 'category-title';
        title.textContent = cat;
        const dropArea = document.createElement('div');
        dropArea.className = 'category-drop';
        dropArea.dataset.category = cat;
        dropArea.style.minHeight = '48px';
        dropArea.style.padding = '8px';
        dropArea.style.border = '2px dashed #9c3030';
        dropArea.style.borderRadius = '6px';
        dropArea.style.background = '#fff';
        dropArea.style.display = 'flex';
        dropArea.style.flexWrap = 'wrap';
        dropArea.style.gap = '8px';
        catWrap.appendChild(title);
        catWrap.appendChild(dropArea);
        catsContainer.appendChild(catWrap);
    });

    // parse words and shuffle
    const words = wordsRaw.map(item => {
        const parts = item.split(':');
        return {
            text: parts[0].trim(),
            target: parts[1] ? parts[1].trim() : ''
        };
    }).sort(() => Math.random() - 0.5);

    // build draggable words
    wordsContainer.innerHTML = '';
    words.forEach(w => {
        const div = document.createElement('div');
        div.className = 'draggable-word';
        div.draggable = true;
        div.dataset.word = w.text;
        div.dataset.target = w.target;
        div.textContent = w.text;
        wordsContainer.appendChild(div);
    });

    // controls (check, reset, score)
    let controls = exercise.querySelector('.exercise-controls');
    if (!controls) {
        controls = document.createElement('div');
        controls.className = 'exercise-controls';
        controls.style.marginTop = '12px';
        const checkBtn = document.createElement('button');
        checkBtn.className = 'check-btn';
        checkBtn.textContent = 'Проверить';
        const resetBtn = document.createElement('button');
        resetBtn.className = 'reset-btn';
        resetBtn.textContent = 'Сбросить';
        const scoreText = document.createElement('span');
        scoreText.className = 'score-text';
        scoreText.style.marginLeft = '12px';
        scoreText.textContent = `Баллы: 0/${words.length}`;
        controls.appendChild(checkBtn);
        controls.appendChild(resetBtn);
        controls.appendChild(scoreText);
        exercise.appendChild(controls);
    }

    const dropAreas = exercise.querySelectorAll('.category-drop');
    const wordDivs = exercise.querySelectorAll('.draggable-word');
    const checkBtn = exercise.querySelector('.check-btn');
    const resetBtn = exercise.querySelector('.reset-btn');
    const scoreText = exercise.querySelector('.score-text');

    let dragged = null;
    let originContainer = null;

    // drag handlers for words
    wordDivs.forEach(w => {
        w.addEventListener('dragstart', () => {
            dragged = w;
            originContainer = w.parentElement;
            setTimeout(() => w.style.visibility = 'hidden', 0);
        });
        w.addEventListener('dragend', () => {
            w.style.visibility = 'visible';
            dragged = null;
            originContainer = null;
            // remove any highlight on drop areas
            dropAreas.forEach(d => d.style.borderColor = '#9c3030');
        });
    });

    // drop areas accept multiple words
    dropAreas.forEach(area => {
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.style.borderColor = '#fdab13';
        });
        area.addEventListener('dragleave', () => {
            area.style.borderColor = '#9c3030';
        });
        area.addEventListener('drop', (e) => {
            e.preventDefault();
            if (!dragged) return;
            // append dragged word to this category
            area.appendChild(dragged);
            dragged.style.visibility = 'visible';
            area.style.borderColor = '#9c3030';
        });
    });

    // allow returning words back to wordsContainer
    wordsContainer.addEventListener('dragover', (e) => e.preventDefault());
    wordsContainer.addEventListener('drop', (e) => {
        e.preventDefault();
        if (!dragged) return;
        wordsContainer.appendChild(dragged);
        dragged.style.visibility = 'visible';
    });

    // check action: count correctly placed words
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            let score = 0;
            // clear previous marks
            exercise.querySelectorAll('.draggable-word').forEach(w => {
                w.classList.remove('correct-word', 'incorrect-word');
            });
            exercise.querySelectorAll('.draggable-word').forEach(w => {
                // find parent drop area
                const parentDrop = w.parentElement && w.parentElement.classList.contains('category-drop') ? w.parentElement : null;
                const placedCategory = parentDrop ? parentDrop.dataset.category : '';
                const target = w.dataset.target || '';
                if (placedCategory && target && placedCategory === target) {
                    w.classList.add('correct-word');
                    score++;
                } else {
                    w.classList.add('incorrect-word');
                }
            });
            if (scoreText) scoreText.textContent = `Баллы: ${score}/${words.length}`;
        });
    }

    // reset action: move all words back
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            exercise.querySelectorAll('.draggable-word').forEach(w => {
                wordsContainer.appendChild(w);
                w.classList.remove('correct-word', 'incorrect-word');
            });
            if (scoreText) scoreText.textContent = `Баллы: 0/${words.length}`;
        });
    }
});