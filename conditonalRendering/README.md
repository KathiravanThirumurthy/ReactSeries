Conditional Rendering means:
Showing different UI based on a condition
###
Simple Condition using if (Outside JSX)
function App() {
const isLoggedIn = true;
if (isLoggedIn) {
return <h1>Welcome User</h1>;
}
return <h1>Please Login</h1>;
}
if cannot be written directly inside JSX
###
Ternary Operator
condition ? trueResult : falseResult
const isLoggedIn = false;
<h1>{isLoggedIn ? "Welcome" : "Please Login"}</h1>
###
&& Operator (Show / Hide UI)
true && something → something
false && something → nothing
const show = true;
{show && <p>Hello!</p>}
###
Conditonal Rendering with useState
const [show, setShow] = useState(true);
<button onClick={() => setShow(!show)}>Toggle</button>
{show && <p>Hello!</p>}
###
Conditional Rendering with components
function Login() {
return <h2>Login Page</h2>;
}
function Dashboard() {
return <h2>Dashboard</h2>;
}
{isLoggedIn ? <Dashboard /> : <Login />}
###
Empty State Rendering
{cart.length === 0 ? (
<p>Your cart is empty</p>
) : (
<CartItems />
)}

