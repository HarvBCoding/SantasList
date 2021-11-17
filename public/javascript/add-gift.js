async function addGiftHandler(event) {
    event.preventDefault();
  
    const gift_name = document.querySelector("#add-gift").value;
    console.log("🚀 ~ file: add-del-edit-gift.js ~ line 5 ~ addGiftHandler ~ gift_name", gift_name)
  
    const price = document.querySelector("#add-price").value;
    console.log("🚀 ~ file: add-del-edit-gift.js ~ line 8 ~ addGiftHandler ~ price", price)
   
    const recipient_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    console.log("🚀 ~ file: add-del-edit-gift.js ~ line 11 ~ addGiftHandler ~ recipient_id", recipient_id)
  
  
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

  document.querySelector('.add-gift-form').addEventListener('submit' , addGiftHandler);