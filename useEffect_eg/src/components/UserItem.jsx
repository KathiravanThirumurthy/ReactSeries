function UserItem({ user, deleteUser }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td>
        <button
          onClick={() => deleteUser(user.id)}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default UserItem;
