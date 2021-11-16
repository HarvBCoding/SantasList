async function editRecHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#rec-name").value.trim();
  const relationship = document.querySelector("#rec-relationship").value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/recipients/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      relationship,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".edit-recipient-form").addEventListener("submit", editRecHandler);
