const displayText = (...texts) => {
  const container = document.getElementById('container');

  const paragraphs = texts.map(par=> {
    const elemPar = document.createElement('p');
    elemPar.innerText = par;
    return elemPar;
  });

  paragraphs.forEach(element => {
    container.appendChild(element)
  }); 
}

displayText('Madina', 'Saule', 'Talgat', 'Ermek');
displayText('Balabay', 'Nursultan');