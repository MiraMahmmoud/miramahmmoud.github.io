const buttons = document.querySelectorAll('.experience-right-title button');
const contents = document.querySelectorAll('[data-content]');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        // Deactivate all buttons and hide all contents
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.style.display = 'none');

        // Activate the clicked button and show the corresponding content
        this.classList.add('active');
        document.querySelector(`[data-content="${target}"]`).style.display = 'flex';
    });
});