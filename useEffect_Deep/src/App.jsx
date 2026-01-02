import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList';


function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => setUsers(data));
  },[]);
*/
// With asyn and await
useEffect(()=>{
  const fetchUsers=async()=>{

    try{
          const res= await fetch("https://jsonplaceholder.typicode.com/users")
          console.log(res);
          if(!res.ok)
          {
            throw new Error(` Failed to fetch users ${res.status} `);
          }
          const data=await res.json();
          console.log(data);
          setUsers(data);

    }
    catch(error)
    {
        console.error(error);
    }
  
  }
  fetchUsers();
},[])


  return (
     <div style={{ padding: "20px" }}>
      <h1>Student Data Manipulation (React)</h1>
      <UserList users={users}/>
       
    </div>
  )
}

export default App
