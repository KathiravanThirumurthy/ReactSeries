"""
What is a Controlled Component in React?

A controlled component is:

An input element whose value is controlled by React state.

That means:

React state = single source of truth

Input value comes from state

When user types → state updates → UI re-renders

Controlled component = React controls the input
Uncontrolled component = DOM controls the input

const [name, setName] = useState("");
value={name}
Input value comes from React state.
onChange={(e) => setName(e.target.value)}
When user types:

React updates state

Component re-renders

Input updates

👉 The input cannot change unless React allows it.

That’s why it’s called Controlled.

Visual Flow 
===========
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


"""
