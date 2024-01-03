
// Конструктор Person
function Person(name, surname, status, place, age, photo) {
  this.name = name;
  this.surname = surname;
  this.status = status;
  this.place = place;
  this.age = age;
  this.photo = photo;

  let message=  "Привет, меня зовут " + this.name + " " + this.surname + "!" + " Мне " + this.age +
      " лет. На данный момент я " + this.status +  " в " + this.place;

  // Метод для приветствия
  this.greet = function () { 
    if (this.photo) {
        document.getElementById("modalImage").src = URL.createObjectURL(this.photo);
        openModal();
        document.getElementById("modalText").innerHTML = "<p>" + message  + ".</p>";
        return "";
    }  
    else 
    {
      return message;
    }
  };   
}

function createPerson() {
  // Получение значений из полей ввода
  let name = document.getElementById("name").value || "Этосекрет";
  let surname = document.getElementById("surname").value;
  let status = document.getElementById("status").value;
  let place = document.getElementById("workingPlace").value || "нигде";
  let age = document.getElementById("age").value || "немного";
  let photo = document.getElementById("photo").files[0];

  // Создание объекта Person с использованием введенных данных
  let person = new Person(name, surname, status, place, age, photo);

  // Вывод информации о человеке на HTML-страницу
  let personInfoElement = document.getElementById("personInfo");
  personInfoElement.innerHTML = "<p>" + person.greet() + "</p>";

  // Очистка полей ввода
  document.getElementById("personForm").reset();
  
}

// Функции для работы с модальным окном
function openModal() {
  document.getElementById("myModal").style.display = "block";
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