const gasStationData = [
    { type: 'АИ 92', price: 205, stock: 10000, dailyConsumption: 500 },
    { type: 'АИ 95', price: 230, stock: 8000, dailyConsumption: 400 },
    { type: 'АИ 98', price: 250, stock: 6000, dailyConsumption: 300 },
    { type: 'Diesel', price: 200, stock: 12000, dailyConsumption: 600 },
  ];

  // отображение данных, метод forEach
  function displayGasStationData(data, container) {
    data.forEach(fuel => {
      const p = document.createElement('p');
      p.textContent = `${fuel.type}: ${fuel.price} тг., Запас: ${fuel.stock} литров, Расход: ${fuel.dailyConsumption} литров в день`;
      container.appendChild(p);
    });
  }

  function displayGasStationDataInTable(data, container) {
    const table = document.createElement('table');
    table.innerHTML = '<tr><th>Тип топлива</th><th>Цена, тг.</th><th>Запас, литры</th><th>Расход, литры в день</th></tr>';
    
    data.forEach(fuel => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${fuel.type}</td><td>${fuel.price}</td><td>${fuel.stock}</td><td>${fuel.dailyConsumption}</td>`;
      table.appendChild(tr);
    });

    container.appendChild(table);
  }

  // Функция для обновления информации о топливе
  function updateFuelInfo() {
    const fuelInfoElement = document.getElementById('fuelInfo');
    fuelInfoElement.innerHTML = '';
    displayGasStationData(gasStationData, fuelInfoElement);
  }

 // фильтр
  function filterExpensiveFuel() {
    const expensiveFuel = gasStationData.filter(fuel => fuel.price > 230);
    const fuelInfoElement = document.getElementById('fuelInfo');
    fuelInfoElement.innerHTML = '';
    displayGasStationData(expensiveFuel, fuelInfoElement);
  }

  // Функция для отображения общего расхода топлива, использовался map
  function calculateTotalConsumption() {
    const totalConsumption = gasStationData.map(fuel => fuel.dailyConsumption * 30); // предполагаем 30 дней в месяце
    const fuelInfoElement = document.getElementById('fuelInfo');
    fuelInfoElement.innerHTML = `<p>Общий расход топлива за месяц: ${totalConsumption.reduce((sum, value) => sum + value, 0)} литров</p>`;
  }

  // Функция для отображения информации о запасах топлива в таблице 
  function displayStockInfoInTable() {
    const fuelInfoElement = document.getElementById('fuelInfo');
    fuelInfoElement.innerHTML = '';
    displayGasStationDataInTable(gasStationData, fuelInfoElement);
  }

  // Функция для добавления нового вида топлива, метод push
  function addNewFuel() {
    const fuelTypeInput = document.getElementById('fuelType');
    const fuelPriceInput = document.getElementById('fuelPrice');
    const fuelStockInput = document.getElementById('fuelStock');
    const fuelConsumptionInput = document.getElementById('fuelConsumption');

    const newFuel = {
      type: fuelTypeInput.value,
      price: parseFloat(fuelPriceInput.value),
      stock: parseInt(fuelStockInput.value),
      dailyConsumption: parseInt(fuelConsumptionInput.value),
    };

    gasStationData.push(newFuel);
    updateFuelInfo(); // Обновляем информацию о топливе после добавления нового вида
    fuelTypeInput.value = '';
    fuelPriceInput.value = '';
    fuelStockInput.value = '';
    fuelConsumptionInput.value = '';
  }

  // сортировать массив
  function sortFuelByPrice() {
    gasStationData.sort((a, b) => a.price - b.price);
    updateFuelInfo();
  }

  // удалить последний элемент массива
  function removeLastFuel() {
    gasStationData.pop();
    updateFuelInfo();
  }

  // удалить первый элемент массива
  function removeFirstFuel() {
    gasStationData.shift();
    updateFuelInfo();
  }

  // Функция для отображения объединенного массива через таблицу
  function concatArrays() {
    const additionalFuelData = [
      { type: 'АИ 92 (Семей)', price: 205.0, stock: 18000, dailyConsumption: 750 },
      { type: 'АИ 95', price: 258.0, stock: 22000, dailyConsumption: 900 },
    ];

    const combinedArray = gasStationData.concat(additionalFuelData);
    const concatenatedArrayInfo = document.getElementById('fuelInfo');
    concatenatedArrayInfo.innerHTML = '';
    displayGasStationDataInTable(combinedArray, concatenatedArrayInfo);
  }

 