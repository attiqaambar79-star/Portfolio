javascript
// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Form ko reload hone se rokta hai
    event.preventDefault();

    // Message show karta hai
    alert("Thank you! Your message has been submitted.");

    // Form fields clear karta hai
    this.reset();

});