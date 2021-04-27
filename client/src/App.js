import {useState, useEffect} from 'react'
import axios from "axios";

const App = () => {
  const [statewise, setStatewise] = useState([]);
  const [error, setError] = useState({})
  const fetchData = async()=>{
    try {
      const {data} = await axios.get('http://localhost:5000/api/v1/getcases');
      setStatewise(data);  
      console.log(data[1].state)    
    } catch (err) {
      setError(err)
    }
  }
  useEffect(() => {
      fetchData();
  }, [])
  return (
    <div>
      {statewise[1].state}
    </div>
  )
}

export default App
