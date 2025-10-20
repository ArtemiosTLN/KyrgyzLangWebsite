document.querySelectorAll('.side_menu ul > li').forEach(function(li) {
    li.addEventListener('click', function(e) {
        e.stopPropagation();

        var submenu = li.querySelector('.side_submenu');
        var isOpen = submenu && submenu.style.display === 'block';

        document.querySelectorAll('.side_submenu').forEach(function(sub) {
            sub.style.display = 'none';
        });

        if (submenu && !isOpen) {
            submenu.style.display = 'block';
        }
    });
});