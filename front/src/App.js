import { useEffect, useState } from 'react';
import './App.css';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import AddBusiness from './Pages/AddBusiness';
import EditBusiness from './Pages/EditBusiness';

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

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="App">
      {data && <button onClick={logOut}>LOGOUT</button>}
      {data && data.companyName && !isEdit && <button onClick={() => setIsEdit(true)}>EDIT</button>}

      {
      
      data ?

        data.companyName ?

        isEdit ?
        <EditBusiness setData={setData} data={data} setIsEdit={setIsEdit}/> :
          <Home data={data} setData={setData} /> :

          <AddBusiness setData={setData} /> :


        <Auth setData={setData} /> 

        

      }

    </div>
  );
}

export default App;
