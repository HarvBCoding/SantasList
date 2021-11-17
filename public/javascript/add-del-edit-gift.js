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

// async function editGiftHandler(event) {
//     event.preventDefault();

//     const gift_name = document.querySelector("#gift-name").value;
//     console.log("🚀 ~ file: add-del-edit-gift.js ~ line 53 ~ editGiftHandler ~ #gift-name", #gift-name)

//     const price = document.querySelector("#gift-price").value;
   
//     const gift_id = window.location.toString().split("/")[
//       window.location.toString().split("/").length - 1
//     ];

//     const response = await fetch(`/api/gifts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({
//             gift_name,
//             price,
//             gift_id
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if (response.ok) {
//       document.location.reload(`/dashboard/`);
//     } else {
//       alert(response.statusText);
//     }
//   }
    
//     // end


//   document.querySelector('.edit-post-form').addEventListener('submit', editGiftHandler);
  
  document.querySelector('.add-gift-form').addEventListener('submit' , addGiftHandler);
  

const deleteBtns = document.querySelectorAll('.delete-gift-btn');
for (let i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener('click', deleteGiftHandler);
}


