###
JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React to describe what the UI should look like. JSX looks very similar to HTML but has some differences and powers because it allows embedding JavaScript expressions
###
1. Why JSX?
React uses JSX because it makes writing UI easier and more readable.
Without JSX, we would have to use React.createElement() everywhere, which is more verbose.
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
SameElemetn with Jsx
const element = <h1 className="greeting">Hello, world!</h1>;
###
2. Embedding Expressions in JSX
You can embed any JavaScript expression in JSX by using curly braces {}.
const name = 'Kathiravan';
const element = <h1>Hello, {name}!</h1>;
Expressions can be variables, calculations, function calls, etc.
const a = 5;
const b = 10;
const element = <p>{a} + {b} = {a + b}</p>;

###
3. JSX is an Expression
JSX is not a string. It compiles down to React.createElement().
You can assign JSX to variables, pass it as props, or return it from a function.
const element = <h1>Hello World!</h1>;
function Welcome() {
  return <h2>Welcome to React</h2>;
}

###
4. Specifying Attributes in JSX
JSX uses camelCase for attribute names (e.g., className instead of class, htmlFor instead of for).
You can pass string literals or JavaScript expressions as attribute values.
const element = <img src="logo.png" alt="Logo" />;
const size = 200;
const element2 = <img src="logo.png" width={size} alt="Logo" />;
###
5. JSX Children
JSX elements can contain children, just like HTML.
const element = (
  <div>
    <h1>Hello!</h1>
    <p>This is a paragraph.</p>
  </div>
);
Children can also be expressions:
const name = "React Learner";
const element = <h1>Hello, {name}</h1>;

      ###  Variable Expressions
        const name = "React Learner";
        const element = <h1>Hello, {name}</h1>;
      ### MAthermatical Expressions
        const a = 5;
        const b = 10;
        const element = <p>Total = {a + b}</p>;
      ### Functional Expression
        function greet() {
        return "Welcome to JSX!";
        }

        const element = <h2>{greet()}</h2>;

      ### Conditionl Expression
        const isLoggedIn = true;
        const element = <p>{isLoggedIn ? "Logged In" : "Guest User"}</p>;

      ### Array Mapping
        const items = ["Apple", "Orange", "Banana"];
        const element = (
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
        );
What cannot be used ?
if statements
for statements
while statements


###
6.Conditional Rendering in JSX
You can use JavaScript conditions inside JSX.
const isLoggedIn = true;
const element = <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>;
You can also use && for short-circuit evaluation:
const messages = ['Message 1', 'Message 2'];
const element = (
  <div>
    {messages.length > 0 && <p>You have {messages.length} messages.</p>}
  </div>
);

###
7. Rendering Lists in JSX
You can use .map() to render lists dynamically.
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number}>{number}</li>
);

const element = <ul>{listItems}</ul>;


###
8. JSX Prevents Injection Attacks
React automatically escapes values embedded in JSX to prevent XSS attacks.
const userInput = '<script>alert("Hacked!")</script>';
const element = <p>{userInput}</p>;
// Output: <p>&lt;script&gt;alert("Hacked!")&lt;/script&gt;</p>
###
9. JSX Must Have One Parent Element
A JSX block must return a single parent element.
If you need multiple elements without adding extra nodes, you can use React Fragments:
const element = (
  <>
    <h1>Hello</h1>
    <p>This is JSX basics</p>
  </>
);
###
10. JSX vs HTML Differences
| HTML     | JSX                      | Notes                               |
| -------- | ------------------------ | ----------------------------------- |
| class    | className                | `class` is reserved in JavaScript   |
| for      | htmlFor                  | `for` is reserved in JavaScript     |
| style    | style={{ color: 'red' }} | Inline style takes an object        |
| tabindex | tabIndex                 | camelCase for multi-word attributes |
###
11. JSX and Functions
You can use JSX inside functions, and functions can return JSX.
function greetUser(name) {
  return <h1>Hello, {name}!</h1>;
}

const element = greetUser('Kathiravan');
