document.getElementById('contact').onclick=() => {
    document.getElementById('contact').classList.toggle('expanded');
    document.getElementById('contact-info').classList.toggle('shown');
    document.getElementById('contact-close').classList.toggle('close-shown');
    document.getElementById('contact-icon').classList.toggle('icon-hidden');
};

document.getElementById('music').onclick=() => {
    document.getElementById('music').classList.toggle('expanded');
    document.getElementById('music-info').classList.toggle('shown');
    document.getElementById('music-close').classList.toggle('close-shown');
    document.getElementById('music-icon').classList.toggle('icon-hidden');
};
