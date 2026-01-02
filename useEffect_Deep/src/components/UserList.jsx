import React from 'react'

const UserList = ({ users, deleteUser }) => {
    if (users.length === 0) {
    return <h3>No students found</h3>;
  }
  return (
     <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>
              <button
                onClick={() => deleteUser(user.id)}
                style={{ background: "red", color: "white", border: "none", padding: "5px 10px" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserList