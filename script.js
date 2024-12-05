document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    
    const modalDescription = document.getElementById('modal-description');
    const skillsModal = document.getElementById('skills-modal');
    const skillsModalTitle = document.getElementById('skills-modal-title');
    const skillsModalDescription = document.getElementById('skills-modal-description');
    const closeBtns = document.querySelectorAll('.close');

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            modalTitle.textContent = project.querySelector('h3').textContent;
            
            modalDescription.textContent = project.getAttribute('data-description');
            modal.style.display = 'flex';
        });
    });

    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('click', () => {
            skillsModalTitle.textContent = skill.querySelector('h3').textContent;
            skillsModalDescription.textContent = skill.getAttribute('data-description');
            skillsModal.style.display = 'flex';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
            skillsModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
        if (event.target == skillsModal) {
            skillsModal.style.display = 'none';
        }
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carousel.children.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < carousel.children.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});