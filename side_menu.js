document.querySelectorAll('nav ul > li').forEach(function(li) {
    li.addEventListener('click', function() {
        var submenu = li.querySelector('.side_submenu');
        if (submenu) {
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else { 
                submenu.style.display = 'block';
            }
        }
    });
});