//реализация ассинхронности, try/catch
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки данных:', error.message);
  }
}

// Загрузка данных из JSON файла (был сформирован из фейковых данных)
async function loadData() {
  const data = await fetchData('https://dummyjson.com/users');
  const tableBody = document.getElementById('tableBody');

  // Добавление данных в таблицу
  data.users.forEach(item => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = item["id"];
    row.insertCell(1).textContent = item["firstName"];
    row.insertCell(2).textContent = item["lastName"];
    row.insertCell(3).textContent = item["maidenName"];
    row.insertCell(4).textContent = item["age"];
    row.insertCell(5).textContent = item["gender"];
    row.insertCell(6).textContent = item["phone"];

    const buttonCell = row.insertCell(7);
    const button = document.createElement('button');
    button.textContent = 'more Info';
    button.classList.add('btn', 'button-70');
    button.addEventListener('click', () => openModal(item));
    buttonCell.appendChild(button);
  });
 
}

loadData(); //вызов функции для загрузки в таблицу данных из джейсон

// Функции для работы с модальным окном
function openModal(data) {
  document.getElementById("myModal").style.display = "block";  
 
  document.getElementById("modalImage").src = data["image"];
  const modalContent = document.getElementById('userInfoContent');  
  
  modalContent.innerHTML = `
    <p>email: ${data["email"]}</p>
    <p>username: ${data["username"]}</p>
    <p>birth date:${data["birthDate"]}</p>
    <p>blood group: ${data["bloodGroup"]}</p>
    <p>height: ${data["height"]}</p>
    <p>eye color: ${data["eyeColor"]}</p>
    <p>domain: ${data["domain"]}</p>
    <p>ip: ${data["ip"]}</p>
    <p>address: ${data["address"].address}</p>
    `;

  const lat = data["address"].coordinates.lat;
  const long = data["address"].coordinates.lng;

  if (lat && long) {
    const map = L.map('map').setView([lat, long], 19); // Начальные координаты и уровень масштабирования
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© OpenStreetMap contributors'
   }).addTo(map);
 
   L.marker([lat, long]).addTo(map)
     .bindPopup(`${data["firstName"]} ${data["lastName"]}'s Location`)
     .openPopup();
  }  
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";  
}

// Закрытие модального окна при клике вне изображения
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
      closeModal();
  }
};
