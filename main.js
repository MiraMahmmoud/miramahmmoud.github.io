document.addEventListener("DOMContentLoaded", function () {
    var textWrapper = document.querySelector('.text-wrapper');
    var text = document.querySelector('.text');

    var clone = text.cloneNode(true);
    textWrapper.appendChild(clone);

    var textWidth = text.offsetWidth;

    var spacing = 20;

    clone.style.position = 'absolute';
    clone.style.left = (textWidth + spacing) + 'px';

    textWrapper.style.width = (textWidth + spacing) * 1 + 'px';

    var speedFactor = 0.03;
    var duration = (textWidth + spacing) * speedFactor;

    text.style.animation = `scrollText ${duration}s linear infinite`;
    clone.style.animation = `scrollText ${duration}s linear infinite`;
});

// Get the h1 element with class 'letsTalk'
const letsTalk = document.querySelector('.letsTalk');

// Function to animate the text
function animateMarquee() {
    // Calculate the width of the h1 element and duration based on text length
    const textWidth = letsTalk.offsetWidth;
    const duration = textWidth / 100; // Adjust this value as needed

    // Reset the text position to start off-screen
    letsTalk.style.transform = `translateX(${textWidth}px)`;

    // Function to animate the text
    function animate() {
        letsTalk.animate([
            { transform: `translateX(${textWidth}px)` },
            { transform: 'translateX(-100%)' }
        ], {
            duration: duration * 1000, // Set animation duration
            iterations: 1, // Run the animation only once
        }).onfinish = () => {
            letsTalk.style.transform = `translateX(${textWidth}px)`;
            animate();
        };
    }

    animate();
}

animateMarquee();

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav_component');
    const header = document.querySelector('.nav-bar');
    let navOffsetTop = nav.offsetTop;

    // Recalculate the navOffsetTop when resizing the window
    window.addEventListener('resize', () => {
        navOffsetTop = nav.offsetTop;
    });

    window.addEventListener('scroll', () => {
        // Ensure the sticky class is added only when necessary
        if (window.scrollY > (header.offsetHeight + navOffsetTop)) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }

        // Highlight active section link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav_anchor-link');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - nav.offsetHeight;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const symbols = document.querySelectorAll('.symbol');
    const cards = document.querySelectorAll('.experience-card-second');

    function togglePg(card, symbol) {
        if (card.style.display === 'none') {
            card.style.display = 'block';
            symbol.style.transform = 'rotate(90deg)'; 
        } else {
            card.style.display = 'none';
            symbol.style.transform = 'rotate(0deg)';
        }
    }

    symbols.forEach((symbol, index) => {
        symbol.addEventListener('click', () => {
            togglePg(cards[index], symbol);
        });
    });
});
