const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(contactForm);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const subject = encodeURIComponent(`Contact portfolio — ${name || "Sans nom"}`);
    const body = encodeURIComponent(`Bonjour Emre,\n\n${message}\n\n— ${name}\n${email}`);

    window.location.href = `mailto:oz_emre@icloud.com?subject=${subject}&body=${body}`;
  });
}
