###
Real-Life Analogy
Think of a mobile phone 📱
Turning ON the phone → screen renders
Notifications, internet sync, GPS → side effects
👉 React render = screen display 👉 useEffect = background work after render

API Calls using useEffect
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => setUsers(data));
}, []);
Explanation : 
fetch is a JavaScript function used to get data from a server (API)
fetch returns a promise - fullfilled or rejected - if fullfiled - pending or not
Promise flow in ur code
fetch(url)
  .then(...)
  .then(...)
when data is ready do something
.then(res => res.json())
res- response from server contains status , headers ,body (data)
why res.json()
server sends data as json,javascriupt needs as javascript objects
res.json() also returns a Promise
.then(data => setUsers(data));
what is data ?
Final converted javascript objects
setUsers is a state setter function
It stores API data in state
###
Why not fetch outside useEffect ?
fetch(url); // runs every render
prevents infinite render
###
using async
useEffect(() => {
  async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }

  fetchUsers();
}, []);
###
with error Handling
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUsers(); // ✅ function call
}, []);





