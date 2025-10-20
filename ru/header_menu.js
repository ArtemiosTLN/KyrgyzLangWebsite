document.querySelectorAll('nav ul > li').forEach(function(li) {
    li.addEventListener('mouseenter', function() {
        var submenu = li.querySelector('.submenu');
        if(submenu) submenu.style.display = 'block';
    });
    li.addEventListener('mouseleave', function() {
        var submenu = li.querySelector('.submenu');
        if(submenu) submenu.style.display = 'none';
    });
});

document.querySelectorAll('.language_menu > li').forEach(function(li) {
    li.addEventListener('click', function(e) {
        e.stopPropagation();

        var submenu = li.querySelector('.language_submenu');
        var isOpen = submenu && submenu.style.display === 'block';

        document.querySelectorAll('.language_submenu').forEach(function(sub) {
            sub.style.display = 'none';
        });

        if (submenu && !isOpen) {
            submenu.style.display = 'block';
        }
    });
});