document.querySelectorAll('.show-translation-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const pair = btn.closest('.dialog-pair');
        const translation = pair.querySelector('.dialog-translation');
        const visible = translation.classList.toggle('visible');
        translation.setAttribute('aria-hidden', visible ? 'false' : 'true');
        btn.textContent = visible ? 'Скрыть перевод' : 'Показать перевод';
    });
});