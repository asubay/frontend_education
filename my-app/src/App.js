import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div>
      <h1>Сегодня день котиков</h1>
    </div>
  )
}

function Table() {
  return (
    <div>
      <table border="1" width="600">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Color</th>
            <th>Species</th>
            <th>nature</th>             
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kitty</td>
            <td>black</td>
            <td>poor</td>
            <td>terribly spoiled</td>            
          </tr>
          <tr>
            <td>2</td>
            <td>Mr. Kitty</td>
            <td>red</td>
            <td>British</td>
            <td>godly</td>            
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function CurrenDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth()+1; 
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes(); 
 
  const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}`;

  return (
    <div>
      <h4>Current date and time: {formattedDateTime}</h4>   
    </div>
  );
}

function Cats() {
  let url = "https://robohash.org/Terry.png?set=set4";
  let url1 = "https://robohash.org/Oleta.png?set=set4";
  return (
    <div><br></br>
      <img src={url}/>
      <img src={url1}/>
    </div>
  );
}

function CatTypes() {
  const catArray = ['Persian', 'Siamese', 'Maine Coon', 'Bengal', 'Sphynx'];
  const catString = catArray.join(', ');

  return (
    <div>
      <h1>Other Cat Types</h1>
      <p>Popular cat types include: {catString}.</p>          
      <ol>
        {catArray.map((catType, index) => (
          <li key={index}>{catType}</li>
        ))}
      </ol>
    </div>
  );
}

function App() {
  return (
    <div> 
      <Header/> 
      <CurrenDateTime/>
      <Table/>  
      <Cats/>   
      <CatTypes/>
    </div>
  );
}

export default App;
