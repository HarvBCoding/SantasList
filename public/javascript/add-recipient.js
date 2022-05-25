document.getElementById("body").style.backgroundImage = "url(https://res.cloudinary.com/dceprxjzq/image/upload/v1653443692/Santa%27sList/pexels-olya-kobruseva-xmas-wrappingo-paper.jpg)"

async function newRecipientHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#recipient-name").value;
  const relationship = document.querySelector("#rec-relationship").value;

  const response = await fetch("/api/recipients", {
    method: "POST",
    body: JSON.stringify({
      name,
      relationship,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-recipient-form').addEventListener('submit', newRecipientHandler);