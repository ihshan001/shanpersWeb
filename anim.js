function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = 'Light';
    } else {
        modeToggle.innerHTML = 'Dark';
    }
}

function downloadCV() {
    const cvURL = "Shancv.pdf"; //replacin the cv location
    const aElement = document.createElement('a');
    aElement.setAttribute('href', cvURL);
    aElement.setAttribute('download', 'IhshanCV.pdf'); // givin a name for cv
    aElement.click();
  }

  // Add confirmation message after submitting the contact form
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
      });
