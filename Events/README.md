An event is an action performed by the user.
Rule: React events use camelCase (not lowercase like HTML)
<!-- HTML -->
<button onclick="clickMe()">Click</button>
// React
<button onClick={clickMe}>Click</button>
function App() {
const handleClick = () => {
console.log("Button clicked");
};


return <button onClick={handleClick}>Click Me</button>;
}
Function name is passed, not called
handleClick() (wrong)
handleClick (correct)
<!-- Inline Event Handler -->
<button onClick={() => console.log("Clicked")}>Click</button>
<!-- Passing Arguments to Event Handlers -->
const greet = (name) => {
alert(`Hello ${name}`);
};
<button onClick={() => greet("Student")}>Greet</button>
<!-- Event Object -->
const handleClick = (event) => {
console.log(event);
};
<button onClick={handleClick}>Click</button>
<!-- Common Properties -->
event.target
event.type
event.preventDefault()
<!-- onChange Event (Input Handling) -->
const [name, setName] = useState("");
<input
type="text"
onChange={(e) => setName(e.target.value)}
/>
<p>Hello {name}</p>
<!--onSubmit Event (Forms) -->
const handleSubmit = (e) => {
e.preventDefault();
alert("Form Submitted");
};
<form onSubmit={handleSubmit}>
<button type="submit">Submit</button>
</form>
<!--Multiple Events Example -->
<input
onFocus={() => console.log("Focused")}
onBlur={() => console.log("Blurred")}
/>
