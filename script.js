// ===========================
// Professional Portfolio JS
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Reveal animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));

    // Copy phone number
    const phone = document.getElementById("phone");

    if (phone) {
        phone.addEventListener("click", () => {
            navigator.clipboard.writeText(phone.textContent.trim())
                .then(() => {
                    alert("تم نسخ رقم الهاتف");
                });
        });
    }

    // Copyright year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
