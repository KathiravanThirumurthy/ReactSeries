Props → data passed parent ➜ child
State → data managed inside a component
Passing props through multiple components that don’t really need them, just to reach a deeper child.
function App() {
const user = "Kathiravan";
return <Parent user={user} />;
}
function Parent({ user }) {
return <Child user={user} />;
}
function Child({ user }) {
return <h1>Hello {user}</h1>;
}
###
Lifting State up:
Movign state to the nearest common parent so multiple children can share and update it
function Parent() {
const [count, setCount] = useState(0);
return (
<>
<ChildA count={count} setCount={setCount} />
<ChildB count={count} />
</>
);
}
function ChildA({ count, setCount }) {
return <button onClick={() => setCount(count + 1)}>+</button>;
}
function ChildB({ count }) {
return <p>Count: {count}</p>;
}

###
When to lift state up
✔ Two or more components need same data ✔ One component updates, another displays ✔ Parent-child communication needed

###
Q: What is props drilling? A: Passing props through multiple components unnecessarily.
Q: What is lifting state up? A: Moving state to a common parent to share data.