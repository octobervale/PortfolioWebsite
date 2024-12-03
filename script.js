document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            modalTitle.textContent = project.querySelector('h3').textContent;
            modalImage.src = project.getAttribute('data-image');
            modalDescription.textContent = project.getAttribute('data-description');
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});