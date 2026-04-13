import React, { useRef ,useState} from "react";
function App() {
  const [submittedPost, setSubmittedPost] = useState(null);
   const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(
      new FormData(formRef.current).entries()
    );

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("Response from API:", result);
      setSubmittedPost(result); 
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <>
    {submittedPost && (
        <div>
          <h3>Submitted Post:</h3>
          <p>Title: {submittedPost.title}</p>
          <p>Body: {submittedPost.body}</p>
        </div>
        )}
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" /> <br></br>
      <input name="body" placeholder="Body" /> <br></br>
      <input name="userId" placeholder="User ID" /><br></br>
      <button type="submit">Submit</button>
    </form>
    </>
  );
  
}

export default App
