const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  alert("Merci " + name + ", votre message a bien été envoyé !");
  form.reset();
});
