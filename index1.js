const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const toggleButton = document.querySelector('.toggle-btn');

function toggleSidebar() {
    const isOpen = sidebar.classList.contains('open');
    sidebar.classList.toggle('open', !isOpen);
    content.classList.toggle('shifted', !isOpen);
}
