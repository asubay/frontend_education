async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');

    //проверка находится ли код состояния ответа HTTP в диапазоне 200–299, 
    //что указывает на успешный ответ, выбросим месседж об ошибке
    if (!response.ok) { 
      throw new Error('responce error');
    }

    //json() -асинхронный метод, который считывает содержимое ответа до завершения 
    //и анализирует его как JSON, возвращая объект 
    const comments = await response.json(); 
    const commentsContainer = document.getElementById('comments');

    comments.slice(0, 5).forEach((comment, index) => {
      const indexElement = document.createElement('p');
      indexElement.textContent = `Comment ${index + 1}:`;

      const emailElement = document.createElement('p');
      emailElement.textContent = `Email: ${comment.email}`;

      const bodyElement = document.createElement('p');
      bodyElement.textContent = `Body: ${comment.body}`;

      const commentDiv = document.createElement('div');
      commentDiv.appendChild(indexElement);
      commentDiv.appendChild(emailElement);
      commentDiv.appendChild(bodyElement);

      commentsContainer.appendChild(commentDiv);
    });

    console.log('data fetched successfully!');
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('This is the end');
  }
}

// вызов ассинхронной функции
fetchData();

async function fetchWithPhoto() {

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');

    //проверка находится ли код состояния ответа HTTP в диапазоне 200–299, 
    //что указывает на успешный ответ, выбросим месседж об ошибке
    if (!response.ok) { 
      throw new Error('responce error');
    }

    //json() -асинхронный метод, который считывает содержимое ответа до завершения 
    //и анализирует его как JSON, возвращая объект 
    const comments = await response.json(); 
    const commentsContainer = document.getElementById('comments');    

    comments.slice(0, 5).forEach((comment, index) => {
      const indexElement = document.createElement('p');
      indexElement.textContent = `photo ${index + 1}:`;

      const titleElement = document.createElement('p');
      titleElement.textContent = `title: ${comment.title}`;

      const imageUrl = comment.thumbnailUrl;
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

      const commentDiv = document.createElement('div');
      commentDiv.appendChild(indexElement);
      commentDiv.appendChild(titleElement);
      commentDiv.appendChild(imgElement);

      commentsContainer.appendChild(commentDiv);
    });

    console.log('data fetched successfully!');
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('This is the end');
  }
}

fetchWithPhoto()