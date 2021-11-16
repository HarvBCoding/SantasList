async function addGiftHandler(event) {
  event.preventDefault();

  const gift_name = document.querySelector("#add-gift").value;

  const price = document.querySelector("#add-price").value;
 
  const recipient_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch ('/api/gifts', {
      method: 'post',
      body: JSON.stringify({
          gift_name,
          price,
          recipient_id
      }),
    headers: {
        'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
      document.location.reload();
  } else {
      alert(response.statusText);
  }
}

async function deleteGiftHandler(event) {
  event.preventDefault();

  const id = document.getElementById("gift-name").name
  console.log("🚀 ~ file: add-del-edit-gift.js ~ line 35 ~ deleteGiftHandler ~ id", id)
  
  const response = await fetch(`/api/gifts/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

const deleteBtns = document.querySelectorAll('.delete-gift-btn');
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', deleteGiftHandler);
}

console.log("🚀 ~ file: add-del-edit-gift.js ~ line 49 ~ deleteBtns", deleteBtns)
document.querySelector('.add-gift-form').addEventListener('submit' , addGiftHandler);


