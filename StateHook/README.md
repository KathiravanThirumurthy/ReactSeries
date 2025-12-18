###
https://react.dev/learn/state-a-components-memory
###
State : A Component's Memory
Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.
###
The handleClick event handler is updating a local variable, index. But two things prevent that change from being visible:
Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the component again with the new data.
To update a component with new data, two things need to happen:
Retain the data between renders.
Trigger React to render the component with new data (re-rendering).
###
Anatomy of useState
const [index, setIndex] = useState(0);

###
State is isolated and private
State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

In this example, the Gallery component from earlier is rendered twice with no changes to its logic. Try clicking the buttons inside each of the galleries. Notice that their state is independent:
return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );

