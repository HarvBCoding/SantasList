async function deleteGiftHandler(event) {
  event.preventDefault();

  const id = this.id
  
  const response = await fetch(`/api/gifts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

// edit gift 

async function editGiftHandler(event) {
    event.preventDefault();

    const gift_name = document.querySelector("#gift-name").value;

    const price = document.querySelector("#gift-price").value;
   
    const gift_id = document.getElementById("gift-id").value;

    const rec_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`/api/gifts/${gift_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            gift_name,
            price
    }),
    headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace(`/dashboard/edit/${rec_id}`);
    } else {
      alert(response.statusText);
    }
  }

document.querySelector('.edit-gift-form').addEventListener('submit', editGiftHandler);
    

const deleteBtns = document.querySelectorAll('.delete-btn');
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', deleteGiftHandler);
}