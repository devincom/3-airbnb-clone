import './App.css';
import Navbar from './components/Navbar/Navbar'
import Details from './components/Details/Details'
import Offerings from './components/Offerings/Offerings'
import myData from './data/data';

function App() {
  return (
   <div>
      <Navbar />
      <Details />
      <Offerings myData = {myData}/>
    </div>
  );
}

export default App;
