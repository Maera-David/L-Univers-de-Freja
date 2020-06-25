window.addEventListener('load', function() {
    let menu = document.getElementById('burgerMenu');
    let pageMenu = document.getElementById('div-menu-hide');
    pageMenu.style.display = 'none';
    menu.addEventListener('click', function() {
        if(pageMenu.style.display == 'none') {
            pageMenu.style.display = 'block';
        } else {
            pageMenu.style.display = 'none';
        };
    });
});