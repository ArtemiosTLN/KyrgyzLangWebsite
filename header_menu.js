document.querySelectorAll('nav ul > li').forEach(function(li) {
    li.addEventListener('mouseenter', function() {
        var submenu = li.querySelector('ul');
        if(submenu) submenu.style.display = 'block';
    });
    li.addEventListener('mouseleave', function() {
        var submenu = li.querySelector('ul');
        if(submenu) submenu.style.display = 'none';
    });
});