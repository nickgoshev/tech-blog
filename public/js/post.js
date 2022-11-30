const newFormHandler = async (event) => {
    event.preventDefault();
    const post_id = document.querySelector('input[name="post-id"]').value;
    const description = document.querySelector('#comment-text').value;
    
    if (description ) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({
          post_id, 
          description,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const postPage = '/post/'+post_id;
        document.location.replace(postPage);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);