import UserItem from "./UserItem";

function UserList({ users, deleteUser }) {
  if (users.length === 0) {
    return <h3>No students found</h3>;
  }

  return (
    <table
      border="1"
      cellPadding="10"
      style={{ marginTop: "20px", width: "100%" }}
    >
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
          <UserItem
            key={user.id}
            user={user}
            deleteUser={deleteUser}
          />
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
