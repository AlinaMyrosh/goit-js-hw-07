const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;

  const emailInput = elements.email.value.trim();
  const passwordInput = elements.password.value.trim();

  if (emailInput && passwordInput) {
    const info = {
      email: emailInput,
      password: passwordInput,
    };

    console.log(info);
  } else {
    alert("All form fields must be filled in");
  }

  form.reset();
}
