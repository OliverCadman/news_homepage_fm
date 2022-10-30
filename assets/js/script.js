document.addEventListener('DOMContentLoaded', function() {
    const openSidebar = document.querySelector('#menu-icon');
    const closeSidebar = document.querySelector('#menu-icon--close');
    const sideBar = document.querySelector('.sidebar-nav--wrapper');
    const overlay = document.querySelector('.overlay');


    openSidebar.addEventListener('click', function() {
        console.log('opening')
        sideBar.classList.add('open-sidebar');
        overlay.classList.add('show-overlay');
    })

    closeSidebar.addEventListener('click', function() {
        sideBar.classList.remove('open-sidebar')
        overlay.classList.remove('show-overlay');
    })
})