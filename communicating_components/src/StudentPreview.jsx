function StudentPreview({ message }) {
  return (
    <div>
      <h3>Live Preview</h3>
      <p
        style={{
          padding: "10px",
          border: "1px solid gray",
          width: "250px"
        }}
      >
        {message || "Waiting for input..."}
      </p>
    </div>
  );
}

export default StudentPreview;
