async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  console.log("🚀 ~ file: login.js ~ line 5 ~ loginFormHandler ~ email", email)
  const password = document.querySelector("#password-login").value.trim()
  console.log("🚀 ~ file: login.js ~ line 7 ~ loginFormHandler ~ password", password)

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#login-btn').addEventListener('submit', loginFormHandler);