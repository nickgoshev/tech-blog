const newFormHandler = async (event) => {
    event.preventDefault();
    const post_id = document.querySelector('input[name="id"]').value;
    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit post');
      }
    }
  };
  
  
  
  document
    .querySelector('.edit-post-form')
    .addEventListener('submit', newFormHandler);
  

  