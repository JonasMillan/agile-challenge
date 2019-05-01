import React, { useState, useEffect } from 'react'
import Acordeon from './components/Acordeon'
import CurrentAmount from './components/CurrentAmount'
import { API } from './api/api'
import './App.css';


const App = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await API.userTransactions.getUsersTransactions()

      setData(data.result);
    };

    fetchData();
  }, []);

  let result = (data.length > 0) ? data[0] : false

    return (
      <div>
        <div className="App">
        { result &&
          <CurrentAmount
            name={result.name}
            money={result.acountMount}
          /> 
        }
        </div>
      { result &&
        <Acordeon
          data={result.transactions}
        />
      }
      </div>
    )

}

export default App;
