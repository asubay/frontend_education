async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) { 
      throw new Error('responce error');
    }
   
    const data = await response.json();     
    const tableBody = document.getElementById('tableBody');

    data.forEach(item => {
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = item["id"];
      row.insertCell(1).textContent = item["name"];
      row.insertCell(2).textContent = item["username"];
      row.insertCell(3).textContent = item["phone"];
      row.insertCell(4).textContent = item["website"];
      const showAddressButton = document.createElement('button');
      showAddressButton.classList.add('btn', 'btn-primary', 'btn-sm');
      showAddressButton.textContent = 'Show Address';
      showAddressButton.addEventListener('click', () => showAddress(item.address));

      
      const cell = row.insertCell(5);
      cell.appendChild(showAddressButton); 
    });    

    console.log('data fetched successfully!');
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('This is the end');
  }
}

fetchData();

function showAddress(address) {
 
  $('#addressModal').modal('show');  
  document.getElementById('modalAddress').innerText = `${address.street}, ${address.city}`;
}

/*document.addEventListener("DOMContentLoaded", function () {
  
  const map = L.map("map").setView([0, 0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  
  jsonData.forEach(entry => {
      const marker = L.marker([parseFloat(entry.address.geo.lat), parseFloat(entry.address.geo.lng)])
          .addTo(map)
          .bindPopup(`<b>${entry.name}</b><br>${entry.address.street}, ${entry.address.city}`);
  });


  const rows = document.querySelectorAll("tr[data-entry-id]");
  rows.forEach(row => {
      row.addEventListener("click", function () {
          const entryId = this.getAttribute("data-entry-id");
          const selectedEntry = jsonData.find(entry => entry.id == entryId);

          if (selectedEntry) {
              map.setView([parseFloat(selectedEntry.address.geo.lat), parseFloat(selectedEntry.address.geo.lng)], 10);
              
          }
      });
  });
});
*/