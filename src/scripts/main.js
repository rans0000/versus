; (function () {
    var nav = document.getElementById('mainmenu-wrapper');
    var menuToggleBtn = document.getElementById('btn-mainmenu-toggle');
    var pageHeader = document.getElementById('page-header');

    menuToggleBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('yay');
        nav.classList.toggle('opened');
        pageHeader.classList.toggle('opened');
    });
})();