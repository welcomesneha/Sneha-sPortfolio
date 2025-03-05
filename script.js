/* script.js */
function downloadCV() {
    alert('CV Downloading...');
    document.querySelector('.hero h1').classList.add('pulse');
}

document.querySelector('form').onsubmit = function(e) {
    e.preventDefault();
    alert('Message Sent Successfully');
    document.querySelector('form button').classList.add('pulse');
};
function downloadCV() {
    window.open("CV/cv1.pdf", "_blank");
}

