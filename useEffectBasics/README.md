###
Without useEffect:
React components would:
Run logic only during render
Fail to handle side-effects like:
API calls
Timers
Subscriptions

DOM updates
With useEffect
useEffect allows React to:
Perform side effects after rendering
React to state changes
Control component lifecycle behavior

###
What is a Side Effect?
A side effect is anything that:Happens outside JSX rendering Interacts with the external world
Common Examples:
Fetching data
Setting a timer
Updating document title
Adding event listeners
###
Syntax: 
useEffect(() => {
// side-effect logic
}, [dependencies]);
useEffect has two parts Callback function(what should run) aned Dependency array(When it should run)
###
Case 1 :Without Dependency Array
useEffect(() => {
console.log("Component rendered");
});
Behaviour :
Runs after every render
Runs when State changes , props changes
Analogy:
Like checking attendance every time someone enters the classroom.
⚠️ Use carefully — can cause performance issues.
###
Case 2 :useEffect With Empty Dependency Array
useEffect(() => {
console.log("Component mounted");
}, []);

Behavior:
Runs only once
After first render

Real-Time Use Cases:
API call on page load
Initial setup logic

###
Case 3 : useEffect with Dependencies
useEffect(() => {
console.log("Count changed");
}, [count]);
Behaviour:
Runs on first render
runs whenever count changes
RealTime eg:
SearchInput
Live price updates
Form Validation
###
Beginer eg:
const [count, setCount] = useState(0);
useEffect(() => {
document.title = `Count: ${count}`;
}, [count]);
Updates tab title only when count changes
###
Intermediate Eg:
useEffect(() => {
console.log("Fetching Data");
}, []);
Correct place for API calls
❌ Do NOT call APIs directly inside JSX
###
Expert Concept – Cleanup Function (Intro Only)
useEffect(() => {
const timer = setInterval(() => {
console.log("Running...");
}, 1000);
return () => clearInterval(timer);
}, []);
Why Cleanup Matters :
Prevent memory leaks
Remove listeners
Stop timers
🧹 Like cleaning the classroom before leaving.

###
Mental Model : 
Render → Paint UI → Run useEffect
useEffect never blocks UI rendering

