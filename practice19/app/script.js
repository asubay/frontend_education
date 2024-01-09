// функция, которая будет вызываться через некоторое время
function showMessageCallback(message) {
  document.getElementById('message').innerText = message;
}

// Функция, использующая таймаут для вызова колбэка через 3 секунды
function showDelayedMessage() {
  setTimeout(function () {
      showMessageCallback('Прошло 3 секунды!');
  }, 3000);
}

// Функция, которая будет вызываться с интервалом каждые 5 секунд
function updateMessageInterval() {
  setInterval(function () {
      showMessageCallback('Обновлено каждые 5 секунд!');
  }, 5000);
}

// Запуск функции с задержкой
showDelayedMessage();

// Запуск функции с интервалом
updateMessageInterval();

// Функция, которая будет вызываться с интервалом для создания анимации
function animateElement() {
  let rotation = 0;
  const animatedElement = document.getElementById('animatedElement');

  setInterval(function () {
      rotation += 45;
      animatedElement.style.transform = `rotate(${rotation}deg)`;
  }, 1000);
}

// Запуск функции для создания анимации
animateElement();