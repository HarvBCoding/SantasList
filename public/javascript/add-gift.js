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

  document.querySelector('.add-gift-form').addEventListener('submit' , addGiftHandler);