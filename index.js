


fetch(`https://jsonplaceholder.typicode.com/posts`)
.then((response) =>{
return response.json()
}).then((data) =>{
    const firstPosts = data.slice(0,15);
    firstPosts.forEach((post) => {

        console.log('Title', post.title);
        console.log('Body', post.body);
        console.log('--------------');
        
    });
})
///////////////////////////////////

const putData = {
    title: 'new title',
    body: 'new body',
    userId: 1
  };
  
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(putData)
  })
    .then(response => response.json())
    .then(data => console.log('PUT Response:', data))
    .catch(error => console.error('Eroare PUT:', error));


    ////////////////////////////////////
    const postData = {
        title: 'Second title',
        body: 'Second body',
        userId: 1
      };
      
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(response => response.json())
        .then(data => console.log('POST Response:', data))
        .catch(error => console.error('Eroare POST:', error));     
        
        //////////////////////////////////////

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
          })
            .then(response => response.json())
            .then(data => console.log('DELETE Response:', data))
            .catch(error => console.error('Eroare DELETE:', error));