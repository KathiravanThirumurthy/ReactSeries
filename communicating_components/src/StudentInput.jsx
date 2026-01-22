function StudentInput({ setMessage }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Student Input</h3>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
    </div>
  );
}

export default StudentInput;
