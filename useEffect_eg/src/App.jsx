import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import SortBar from "./components/SortBar";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users using async / await
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Search & Sort logic
  useEffect(() => {
    let temp = [...users];

    if (search) {
      temp = temp.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      temp.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      temp.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredUsers(temp);
  }, [search, sortOrder, users]);

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  if (loading) return <h2>Loading students...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Data Manipulation</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <SortBar setSortOrder={setSortOrder} />

      <UserList users={filteredUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
