Forms reloads on submit in html
React form -controls the form , data is stored in state, no page reload
###
Controlled Component :
A controlled component is an input element whose value is controlled by React state.

That means:

React state = single source of truth

Input value comes from state

When user types → state updates → UI re-renders

Controlled component = React controls the input

Uncontrolled component = DOM controls the input

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <p>Typed: {name}</p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;

React stores the value.
value={name}
Input value comes from React state.
onChange={(e) => setName(e.target.value)}

When user types:

React updates state

Component re-renders

Input updates

👉 The input cannot change unless React allows it.

That’s why it’s called Controlled.
User types
⬇
onChange fires
⬇
setState updates
⬇
Component re-renders
⬇
Input displays new value

React is controlling everything.

###
Handling form Submission
const handleSubmit = (e) => {
e.preventDefault();
console.log(name);
};
<form onSubmit={handleSubmit}>
<button type="submit">Submit</button>
</form>

###
Multiple Inputs with Separate State (Beginner)
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
Simple but not scalable

###
Multiple Inputs using Single State Object (Intermediate)
const [formData, setFormData] = useState({
email: "",
password: ""
});


const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};
<input name="email" onChange={handleChange} />
<input name="password" onChange={handleChange} />

###
Handling Different Input types
<textarea value={message} onChange={handleChange} />
Select Dropdown
<select value={role} onChange={handleChange}>
<option value="">Select</option>
<option value="admin">Admin</option>
</select>
Checkbox
<input
type="checkbox"
checked={agree}
onChange={(e) => setAgree(e.target.checked)}
/>
Radio Button
<input type="radio" value="male" name="gender" />
<input type="radio" value="female" name="gender" />

###
BAsic form Validation
if (!email) {
alert("Email required");
}

Condtional error display
{!email && <p>Email is required</p>}
Disable Submit Button
<button disabled={!email || !password}>Submit</button>
Reset form After Submit
setFormData({ email: "", password: "" });

###
Expert Level: Dynamic Forms
const fields = ["email", "password"];
{fields.map((field) => (
<input key={field} name={field} onChange={handleChange} />
))}



