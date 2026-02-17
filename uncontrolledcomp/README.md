What is an Uncontrolled Component?

This is NOT controlled:

<input type="text" />

Here:

The DOM stores the value

React doesn’t know the current value

You need ref to access it

Why Controlled Components Are Important

✅ Easier validation
✅ Easier conditional rendering
✅ Real-time feedback
✅ Predictable state
✅ Required for most real-world forms

In production apps → 90% forms use controlled components.


We are NOT using useState

There is no:

value={...}
onChange={...}

So React is NOT controlling the inputs.

We use useRef()
const nameRef = useRef(null);

React creates a reference to the DOM element.

When Submit Happens
nameRef.current.value

This directly reads value from the DOM.

Key Difference from Controlled
============================

In controlled:

value={state}
onChange={setState}

In uncontrolled:

ref={inputRef}

Value lives inside the DOM until you access it.

<input type="file" />

File inputs must use refs.

