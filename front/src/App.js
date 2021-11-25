import { useEffect, useState } from 'react';
import './App.css';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import AddBusiness from './Pages/AddBusiness';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data')) 
    if (localData) {
      setData(localData)
    }
  }, [])

  const logOut = () => {
    setData()
    localStorage.clear()
  }

  return (
    <div className="App">
      {data && <button onClick={logOut}>LOGOUT</button>}
      {data ?

        data.companyName ?
        <Home data={data} setData={setData}/> :
        <AddBusiness setData={setData}/> :

        <Auth setData={setData} />
      }
    </div>
  );
}

export default App;
