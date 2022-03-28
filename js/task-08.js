const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (!formElements.email.value || !formElements.password.value) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
      mail,
      password,
    };

    console.log(formData);

    formEl.reset();
  }
});
