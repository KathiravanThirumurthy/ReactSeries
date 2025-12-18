
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  ###
  Why Spread ?
  because setFormData replaces the entire object, so we have to make  copy of the object
  Never modify a state directly - is a rule
  {
  ...formData,           // keeps name & email
  email: "new@gmail.com" // updates only email
}
Why Sqaure Brackets ?
[e.target.name]: e.target.value
This is called Computed Property Name
###
Controlled vs Uncontrolled Components (React Forms)
Who controls the input value
REact controls it - controlled 
DOM(browser) controls it-uncontrolled
###
Controlled Components
An input whose value is controlled by React state.
<input value={name} onChange={handleChange} />
When to use ?
Login / Register
Admission forms
Checkout forms
Any business logic
Validation required

###
UnControlled Components
An input whose value is managed by the DOM itself.
React reads value only when needed.
<input ref={inputRef}>
When to use
Search bar
Simple form
Performance critical input
One-time data collection
Many apps use both:
Inputs → uncontrolled
On submit → controlled state


