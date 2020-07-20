import React, { useState, useEffect } from 'react'
import Acordeon from './components/Acordeon'
import CurrentAmount from './components/CurrentAmount'
import { API } from './api/api'
import './App.css';


const App = () => {
  const [userTransactions, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await API.userTransactions.getUsersTransactions()
      const dataUser = await API.userTransactions.getUsersData()
      setUserData(dataUser.UserAcount)
      setData(data.UserTransactions);
    };

    fetchData();
  }, []);
    const load = 'Loading'
    return (
      <div className="App">
       
        { userData ?
          <CurrentAmount
          name={userData.name}
          money={userData.acountMount}
          /> 
          :
          load
        }

      { userTransactions &&
        <Acordeon
        data={userTransactions}
        />
        } 
      </div>
    )

}

export default App;


