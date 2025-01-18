const sidebar = document.getElementById('sidebar');
const content = document.getElementById('main-content');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    content.classList.toggle('shifted');
}
