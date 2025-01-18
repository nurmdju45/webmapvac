const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        mainContent.style.marginLeft = '200px';
    } else {
        mainContent.style.marginLeft = '0';
    }
}
