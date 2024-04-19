//Navbar Show On Scroll
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
});

//Navbar Main Menu Show OnClick
function menuShow() {
    const mainMenu = document.getElementById('menu');
    var visible = document.getElementById('showHide').innerHTML;

    if (visible == "false") {
        mainMenu.classList.remove("menu-show");
        mainMenu.classList.add("menu-hide");
        document.getElementById('showHide').innerHTML = "true";
    } else {
        mainMenu.classList.add("menu-show");
        mainMenu.classList.remove("menu-hide");
        document.getElementById('showHide').innerHTML = "false";
    }
    toggleScroll();
}

//Navbar Main Menu Hide OnClick
function menuHide() {
    const mainMenu = document.getElementById('menu');
    var visible = document.getElementById('showHide').innerHTML;

    if (visible == "false") {
        mainMenu.classList.remove("menu-show");
        mainMenu.classList.add("menu-hide");
        document.getElementById('showHide').innerHTML = "true";
    } else {
        mainMenu.classList.add("menu-show");
        mainMenu.classList.remove("menu-hide");
        document.getElementById('showHide').innerHTML = "false";
    }
    toggleScrollBack()
}

// Pop Up Disable Scroll Script
function toggleScroll() {
    var body = document.getElementsByTagName('body')[0];
    body.style.overflowY = (body.style.overflowY == 'hidden') ? 'auto' : 'hidden';
}

function toggleScrollBack() {
    var body = document.getElementsByTagName('body')[0];
    body.style.overflowY = (body.style.overflowY == 'visible') ? 'auto' : 'visible';
}

//Hero BG size to Overlay
// Get video element
var video = document.getElementById('hero-bg');
// Get overlay element
var overlay = document.querySelector('.overlay');

// Set overlay dimensions based on the video dimensions
video.addEventListener('loadedmetadata', function () {
    overlay.style.width = video.offsetWidth + 'px';
    overlay.style.height = 'calc(' + video.offsetHeight + 'px + 40px)';
});

// Optional: Adjust dimensions on window resize
window.addEventListener('resize', function () {
    overlay.style.width = video.offsetWidth + 'px';
    overlay.style.height = 'calc(' + video.offsetHeight + 'px + 40px)';
});

//Scroll Reveal Script
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 400,
});

ScrollReveal().reveal('.wave-ani', {
    distance: '90px',
    delay: 400,
    origin: 'left',
    afterReveal: function (domEl) {
        // Reset and play the video when revealed
        resetAndPlayVideo();
    },
    beforeReset: function (domEl) {
        // Pause the video when the reveal is reset
        pauseVideo();
    },
});

function resetAndPlayVideo() {
    const ani = document.getElementById('wave-ani');

    // Reset the video by setting currentTime to 0
    ani.currentTime = 0;


    // Add an event listener for the end of the video to reset and play again
    ani.addEventListener('ended', function () {
        resetAndPlayVideo();
    });

    // Play the video
    ani.play();
}

function pauseVideo() {
    const video = document.getElementById('wave-ani');

    // Pause the video
    video.pause();
}

ScrollReveal().reveal('.demo-reel', { distance: '90px', delay: 200, origin: 'left' });
ScrollReveal().reveal('.about-heading, .about-p', { distance: '90px', delay: 500, origin: 'left' });

ScrollReveal().reveal('.project', { distance: '60px', delay: 100, origin: 'top' });
ScrollReveal().reveal('.contact-column', { distance: '60px', delay: 400, origin: 'bottom', reset: false });
ScrollReveal().reveal('.icons', { distance: '60px', delay: 600, origin: 'bottom', reset: false });

//Shine Effect
const projects = document.querySelectorAll('.works-section .project-title');

projects.forEach(project => {
    project.addEventListener('mousemove', e => {
        // Get the position of the cursor within the project element
        const x = e.clientX - project.getBoundingClientRect().left;
        const y = e.clientY - project.getBoundingClientRect().top;

        // Update the radial-gradient position based on the cursor position
        project.style.setProperty('--x', x + 'px');
        project.style.setProperty('--y', y + 'px');
    });
});