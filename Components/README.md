###
What is a Component?

A Component is a reusable UI block in React.
Just like LEGO blocks — we build a big UI by joining many small pieces.

📌 Example real-life components in a webpage:

Header

Navbar

Footer

Button

Card

###
🧩 Types of Components

React mainly uses Function Components (modern way)

Type	Example	Usage
Function Component	function Header(){}	Most commonly used

###
Naming Rules for Components

✔ Component name must start with Capital letter
✔ Return one parent JSX element
✔ Must export if used in another file
###
Basic Structure of a Function Component
function Welcome() {
  return <h1>Hello Students!</h1>;
}

export default Welcome;
###
using component inside another component
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

###
Assignments
Create a Button component reusable for:
Submit
Reset
Login
