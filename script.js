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

function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = "Message from " + name;
    var body = "Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;

    window.location.href = "mailto:mira99mahmoud@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

