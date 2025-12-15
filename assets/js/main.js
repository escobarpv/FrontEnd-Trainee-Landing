document.addEventListener('DOMContentLoaded', () => {
    const colorSitio = document.getElementById('color-sitio');
    const body = document.body;
    const currentTheme = localStorage.getItem('color') || 'light';

    if (currentTheme === 'dark') {
        body.classList.add('color-dark');
        colorSitio.innerHTML = '<i class="bi bi-sun"></i>';
    }

    colorSitio.addEventListener('click', () => {
        body.classList.toggle('color-dark');
        const isDark = body.classList.contains('color-dark');
        localStorage.setItem('color', isDark ? 'dark' : 'light');
        colorSitio.innerHTML = isDark ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon"></i>';
    });
});
