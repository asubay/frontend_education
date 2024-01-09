function getCoordinates(data) {
  const map = L.map('map').setView([0, 0], 2); // Начальные координаты и уровень масштабирования
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  data.data.forEach(address => {
      // Проверяем, есть ли координаты в адресе
      if (address.latitude && address.longitude) {
        // Формируем title для маркера с информацией о адресе, city и country
        const markerTitle = `${address.street}, ${address.city}, ${address.country}`;         
          
        const marker = L.marker([address.latitude, address.longitude], {
            title: markerTitle          
        }).addTo(map);
          
        marker.bindPopup(`<strong>${markerTitle}</strong><br>${address.streetName}`); //добавляем описание на маркер
        marker.on('click', () => showCurrentTime(address.city));
      }
  });
}

function handleApiError(error) {
  console.error('Ошибка при получении данных:', error);
}

//получить теекущее время в стране из выбранного маркера
function showCurrentTime(city) {
  
  try {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('timeDisplay').innerHTML = `Current time in ${city}: ${currentTime}`;
  } catch (error) {
      console.error('Invalid time zone specified:', error);
      alert('Invalid time zone specified. Please try again later.');
  }
}

try {

// Выполняем запрос к API с помощью fetch
fetch('https://fakerapi.it/api/v1/addresses?_quantity=5') //источник https://fakerapi.it/
.then(response => {
    if (!response.ok) {
        throw new Error(`ошибка при запросе к источнику: ${response.statusText}`);
    }
    return response.json();
})
.then(getCoordinates)
.catch(handleApiError);

} catch (error) {
  console.error('произошла непредвиденная ошибка:', error);
  alert('произошла непредвиденная ошибка. Попробуйте позже');
}

