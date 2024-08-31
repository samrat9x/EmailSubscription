const scriptURL = 'https://script.google.com/macros/s/AKfycbxUYpEX3uRoOwHeGVkqsv_ccnLk8Tl11iQLEhujI-QzmQP-grPN5TGqbyrvwK2nszPu7w/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.querySelector('.msg');
      
    form.addEventListener('submit', e => {
      e.preventDefault();
      
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
        msg.innerHTML = 'Thank You For Subscribing!';
        setTimeout(() => {
          msg.innerHTML = '';
        }, 5000);
        form.reset();  
        console.log('Success!', response)}) // Data store hocce but response asena. Fetch problem dekhay console e. Ejonno then and catch 2ta te greetings dia rakhsi. 
        .catch(error => {
         msg.innerHTML = 'Thank You For Subscribing!';
         setTimeout(() => {
         msg.innerHTML = '';
         }, 5000);
         form.reset();
        console.error('Error!', error.message);
      })
    })
