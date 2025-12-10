###
What props are
✔ How to send data from parent to child component
✔ How to access and display props
✔ Props with multiple values
✔ Props with functions
✔ Props validation & default props (advanced)
###
What are Props?
Props = Properties
Used to pass data from Parent Component to Child Component
Data can be: string, number, array, object, boolean, function, JSX etc.
Props are read-only (cannot be changed by child)
###
function Student(props) {
  return <h2>Name: {props.name}</h2>;
}

function App() {
  return <Student name="Arun" />;
}
###
passing mutiple props
function Student(props) {
  return (
    <p>{props.name} - Age: {props.age}</p>
  );
}

function App() {
  return <Student name="Kaviya" age={21} />;
}
###
Passing object as Prop
const person = {
  name: "Arun",
  city: "Chennai",
  age: 21
};
ParentComponent
<UserProfile data={person} />
Child Component
function UserProfile({ data }) {
  return (
    <p>{data.name} from {data.city} - Age: {data.age}</p>
  );
}
Here data is a single object prop
###
Passing Array as Prop
const fruits = ["Apple", "Banana", "Grapes"];
<FruitList items={fruits} />
function FruitList({ items }) {
  return (
    <ul>
      {items.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
###
Passing array of Objects as prop
const students = [
  { id: 1, name: "Kavin", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Arun", age: 21 }
];
Parent Component
<StudentList list={students} />
Child Component
function StudentList({ list }) {
  return (
    <ul>
      {list.map((stu) => (
        <li key={stu.id}>{stu.name} - {stu.age}</li>
      ))}
    </ul>
  );
}

###
Passing Arrw function as props
const showMessage = () => {
  alert("Hello from Parent!");
};
Parent Compoent
<ActionButton handleClick={showMessage} />
child Component
function ActionButton({ handleClick }) {
  return (
    <button onClick={handleClick}>Click Me</button>
  );
}

###
PAssing Arrow function inline
Parent Component
<ActionButton handleClick={() => alert("Inline Function!")} />
Child Component
function ActionButton({ handleClick }) {
  return <button onClick={handleClick}>Tap</button>;
}

###
Very common in real projects (e.g., Add to Cart)
Combining Array of Objects
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 }
];

const handleBuy = (pName) => {
  alert("You bought " + pName);
};

Parent Component :
<ProductList items={products} onBuy={handleBuy} />

Child Component :
function ProductList({ items, onBuy }) {
  return (
    <div>
      {items.map((p) => (
        <div key={p.id}>
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => onBuy(p.name)}>Buy</button>
        </div>
      ))}
    </div>
  );
}










