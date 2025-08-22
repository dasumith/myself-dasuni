document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const formMessage = document.getElementById("formMessage");

  formMessage.textContent = `Thank you, ${name}! Your message was received.`;
  formMessage.classList.remove("hidden");
  this.reset();
});
