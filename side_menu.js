document.querySelectorAll('.side_menu ul > li').forEach(function(li) {
    li.addEventListener('click', function(e) {
        // Предотвращаем всплытие, чтобы вложенные клики не мешали
        e.stopPropagation();

        var submenu = li.querySelector('.side_submenu');
        var isOpen = submenu && submenu.style.display === 'block';

        // Закрываем все подменю
        document.querySelectorAll('.side_submenu').forEach(function(sub) {
            sub.style.display = 'none';
        });

        // Если текущее было закрыто — открываем, если открыто — оставляем закрытым
        if (submenu && !isOpen) {
            submenu.style.display = 'block';
        }
    });
});