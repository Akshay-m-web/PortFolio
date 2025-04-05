const viewer_name=document.querySelector('input[type="text"]');
const viewer_email=document.querySelector('input[type="email"]');
const viewer_message=document.querySelector('textarea[placeholder="Your Message"]');
const viewer_button=document.querySelector('button[type="submit"]');
console.log(viewer_name, viewer_email, viewer_message, viewer_button);
viewer_button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = viewer_name.value;
    const email = viewer_email.value;
    const message = viewer_message.value;

    if (name && email && message) {
        const url = `https://wa.me/${9511807984}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank"); // Opens in a new tab

        viewer_name.value = '';
        viewer_email.value = '';
        viewer_message.value = '';
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

//Animations
const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Optional: Animate only once
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.skills h2, .card,#projects h2,.project-card,.contact-left,.contact-right').forEach(el => observer.observe(el));