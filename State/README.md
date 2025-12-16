REact State
What is State?

State is data that changes in the UI

When state changes → component re-renders automatically

🔹Syntax of useState
const [count, setCount] = useState(0);

Button Click

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default Counter;

###
State with strings
const [name, setName] = useState("Guest");

<button onClick={() => setName("React Student")}>Change Name</button>

###
State with Objects
const [user, setUser] = useState({ name: "John", age: 20 });

<button onClick={() => setUser({ ...user, age: user.age + 1 })}>
  Increase Age
</button>
Must use spread operator (...) otherwise other properties will be lost

###
State with Arrays
const [items, setItems] = useState(["Apple"]);

<button onClick={() => setItems([...items, "Orange"])}>
  Add Item
</button>
✔ Always create a new array: [...]
❌ Never modify directly using .push()

###
PAss state to Children
function Parent() {
  const [count, setCount] = useState(0);
  return <Child count={count} />;
}
###
Updating State Based on Previous State
Correct way:
setCount(prev => prev + 1);
Bad way ❌ (may show wrong value if many updates happen):
setCount(count + 1);
###
Multiple State Variables
const [name, setName] = useState("");
const [age, setAge] = useState(18);
###
Controlled Input with State (Form + State)
const [text, setText] = useState("");

<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
<p>You typed: {text}</p>
✔ Input always follows state
✔ State updates on typing
###
Toggle State (Boolean)
const [show, setShow] = useState(true);

<button onClick={() => setShow(!show)}>
  Toggle
</button>

{show && <p>Hello!</p>}

Conditional Rendering using &&
{show && <p>Hello!</p>}

This uses JavaScript short-circuit logic.

Rule:
true && something   → something
false && something  → false

Light Switch Example

show = true → Light ON → You see “Hello!”

show = false → Light OFF → You don’t see it

Button = Switch

This pattern is used for:

Show / Hide password

Open / Close modal

Show / Hide menu

Read more / Read less

FAQ expand / collapse

###
Array of Objects (Example: Simple Cart)
const [cart, setCart] = useState([]);

const addToCart = (product) => {
  setCart([...cart, product]);
};

