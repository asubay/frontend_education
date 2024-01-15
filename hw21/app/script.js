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
  const data = await fetchData('app/fuel_info.json');
  const tableBody = document.getElementById('fuelTableBody');

  // Добавление данных в таблицу
  data.forEach(fuel => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = fuel["gas_station"];
    row.insertCell(1).textContent = fuel["fuel_type"];
    row.insertCell(2).textContent = fuel["price"];
    row.insertCell(3).textContent = fuel["need_per_day"];
    row.insertCell(4).textContent = fuel["need_per_month"];
  });
  getFuelPrices();
}

loadData(); //вызов функции для загрузки в таблицу данных из джейсон


//добавление новой записи о топливе. Добавляется без записи в джейсон файл, при обновлений
//внесенные данные сотрутся. надо бы сделать все таки запись, и заново подрузить данные, ато некрасиво
function addFuel() {
  const gasStation = document.getElementById('gasStation').value;
  const fuelType = document.getElementById('fuelType').value;
  const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  const dailyDemand = parseInt(document.getElementById('dailyDemand').value);
  const monthlyDemand = parseInt(document.getElementById('monthlyDemand').value);
  console.log(gasStation);

  if (isNaN(fuelPrice) || isNaN(dailyDemand) || isNaN(monthlyDemand)) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  const tableBody = document.getElementById('fuelTableBody');
  const row = tableBody.insertRow();
  row.insertCell(0).textContent = gasStation;
  row.insertCell(1).textContent = fuelType;
  row.insertCell(2).textContent = fuelPrice;
  row.insertCell(3).textContent = dailyDemand;
  row.insertCell(4).textContent = monthlyDemand;

  // Очистка полей формы
  document.getElementById('addFuelForm').reset();
}

//Здесь реалзован пример с фильтрами
function filterDataByPrice() {
  const filterInput = document.getElementById('filterInput').value;
  const priceThreshold = parseFloat(filterInput);

  const tableRows = Array.from(document.getElementById('fuelTableBody').querySelectorAll('tr'));

  const filteredRows = tableRows.filter(row => {
    const price = parseFloat(row.cells[2].textContent);
    return !isNaN(price) && price > priceThreshold;
  });
  console.log(filteredRows);

  // Очищаем таблицу и добавляем отфильтрованные строки
  clearTable();
  filteredRows.forEach(row => document.getElementById('fuelTableBody').appendChild(row));
}

//очистка таблицы
function clearTable() {
  const tableBody = document.getElementById('fuelTableBody');
  
  // Удаление всех строк из тела таблицы
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

//Здесь реализован пример с сортировкой
function sortDataByPrice() {
  const tableRows = Array.from(document.getElementById('fuelTableBody').querySelectorAll('tr'));

  const sortedRows = tableRows.sort((row1, row2) => {
    const price1 = parseFloat(row1.cells[2].textContent);
    const price2 = parseFloat(row2.cells[2].textContent);

    return price1 - price2;
  });

  // Очищаем таблицу и добавляем отсортированные строки
  clearTable();
  sortedRows.forEach(row => document.getElementById('fuelTableBody').appendChild(row));
}

function sortDataByType() {
  const tableRows = Array.from(document.getElementById('fuelTableBody').querySelectorAll('tr'));

  const sortedRows = tableRows.sort((row1, row2) => {
    const price1 = parseFloat(row1.cells[3].textContent);
    const price2 = parseFloat(row2.cells[3].textContent);

    return price1 - price2;
  });

  // Очищаем таблицу и добавляем отсортированные строки
  clearTable();
  sortedRows.forEach(row => document.getElementById('fuelTableBody').appendChild(row));
}


//reduce пример c расчетом потребностей топлива
function calculateTotalMonthlyDemand() {
  demandElement = document.getElementById("monthDemand");

  const tableRows = document.getElementById('fuelTableBody').querySelectorAll('tr');

  const totalMonthlyDemand = Array.from(tableRows).reduce((total, row) => {
    const monthlyDemand = parseInt(row.cells[4].textContent);
    return total + (isNaN(monthlyDemand) ? 0 : monthlyDemand);
  }, 0);

  demandElement.innerText ='Общая потребность в месяц: ' + totalMonthlyDemand + ' тонн'; 
  
}

function calculateTotalDailyDemand() {
  demandElement = document.getElementById("dayDemand");

  const tableRows = document.getElementById('fuelTableBody').querySelectorAll('tr');

  const totalDailyDemand = Array.from(tableRows).reduce((total, row) => {
    const dayDemand = parseInt(row.cells[3].textContent);
    return total + (isNaN(dayDemand) ? 0 : dayDemand);
  }, 0);

  demandElement.innerText ='Общая потребность в день: ' + totalDailyDemand + ' тонн'; 
  
}


//пример с map
function getFuelPrices() {
  
  const tableRows = document.getElementById('fuelTableBody').querySelectorAll('tr');
  
  const stations = new Set(Array.from(tableRows).map(row => row.cells[0].textContent)) ;  
  const uniquestations = Array.from(stations);
  
  document.getElementById('stations').innerText = uniquestations.join(', ');
}

